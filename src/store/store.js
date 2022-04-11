import { createStore } from 'vuex';

export default createStore({
    strict:true,
    state :{   
        pdf:null
    },
    getters:{
        pdfDoc:state=> state.pdf
    },
    mutations:{
        attachPdf:(state,payload)=> {
            return state.pdf=payload
        }
    },
    actions:{
        reducePrice:(context,payload)=>{
            setTimeout(()=>context.commit('reducePrice',payload),2000)
        }
    }
});