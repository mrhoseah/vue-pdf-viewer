<template>
    <div class="px-2 bg-slate-200 space-y-4 py-4 rounded-sm">
        <div class="flex justify-center gap-2 align-middle">
            <button ref="prev" class="p-2 text-sm bg-slate-100 hover:bg-slate-300 rounded-lg" @click="onPrevPage">
                <span class="flex gap-1 align-middle text-gray-800">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
</svg>
                Prev Page
                </span>
            </button>
            <button ref="next" class="p-2 text-sm bg-slate-100 hover:bg-slate-300 rounded-lg" @click="onNextPage">
                <span class="flex gap-1 align-middle text-gray-800">
                    Next Page
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </span>
            </button>
            <div class="py-2 px-3">Page <span class="ml-1">{{state.pageNumber}}</span> of <span>{{state.numPages}}</span></div>
        </div>
        <div class="bg-white rounded-lg p-2 my-2">
            <canvas id="renderRef"></canvas>
        </div>
    </div>
</template>
<script>
import { reactive, defineComponent, onMounted,ref } from 'vue';

import * as pdfjsLib from 'pdfjs-dist/webpack';

export default defineComponent({
        props:{
                url:String,
                scale: {
                    type: [Number,String],
                    default: 1.5
                },
        },

        setup(props){
            const pdfDocument=ref(null);
            const state= reactive({
                pageNumber:1,
                pdfDocument:null,
                numPages:0,
                pageRendering :false,
                pageNumIsPending:null,
            })
            onMounted(()=>{
                    pdfjsLib.getDocument(props.url).promise.then(function(pdfDoc_) {
                        state.numPages= pdfDoc_.numPages;
                        state.pageRendering =true;
                        pdfDocument.value=pdfDoc_
                        console.log(pdfDoc_)
                        renderPage(state.pageNumber)
                    })
            })

            function renderPage(num){
                    state.pageRendering = true;
                    pdfDocument.value.getPage(num).then(function(page) {
                    console.log(page)
                    const canvas= document.querySelector('#renderRef');
                    const viewport = page.getViewport({ scale: props.scale, })
                    let outputScale = window.devicePixelRatio || 1;

                    const context = canvas.getContext('2d');

                    canvas.width = Math.floor(viewport.width * outputScale);
                    canvas.height = Math.floor(viewport.height * outputScale);
                    canvas.style.width = Math.floor(viewport.width) + "px";
                    canvas.style.height =  Math.floor(viewport.height) + "px";

                    const transform = outputScale !== 1
                    ? [outputScale, 0, 0, outputScale, 0, 0]
                    : null;

                    const renderContext = {
                        canvasContext: context,
                        transform: transform,
                        viewport: viewport
                    };
                    const renderTask = page.render(renderContext);

                    // Wait for rendering to finish
                    renderTask.promise.then(function() {
                    state.pageRendering = false;
                    if (state.pageNumPending !== null) {
                        // New page rendering is pending
                        renderPage(state.pageNumPending);
                        state.pageNumPending = null;
                    }
                    });
                    state.pageNumber=num
                })
            }
            function queueRenderPage(num) {
                if (state.pageRendering) {
                    state.pageNumPending = num;
                } else {
                    renderPage(num);
                }
            }

            function onPrevPage() {
                if (state.pageNumber <= 1) {
                    return;
                }
                state.pageNumber--;
                queueRenderPage(state.pageNumber);
            }
            function onNextPage() {
                if (state.pageNumber <= state.numPages) {
                    return;
                }
                state.pageNumber++;
                queueRenderPage(state.pageNumber);
            }
        return{
            renderPage,
            queueRenderPage,
            onPrevPage,
            onNextPage,
            state
            }
        }
})
</script>