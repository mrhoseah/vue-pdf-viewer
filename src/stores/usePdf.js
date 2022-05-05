import { defineStore } from 'pinia'

export const usePdfStore = defineStore('pdf',{
    state: () => {  
        return {
            pdfDocument:null,
            pageNumber:1,
            numPages:0,
            pageRendering :false,
            pageNumIsPending:null,
        }
    },
    getters:{
        myDocument: (state) =>state.pdfDocument,
        doc_pageNumber: (state) =>state.pageNumber,
        pages: (state) =>state.numPages,
        isPageRendering: (state) =>state.pageRendering,
        isPageNumIsPending: (state) =>state.pageNumIsPending
    }
});