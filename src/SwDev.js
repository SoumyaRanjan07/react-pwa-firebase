export default function SwDev()
{
let swurl='${process.env.PUBLIC_URL}/Sw.js'
navigator.serviceWorker.register(swurl).then((response)=>{
    console.warn('response',response);
})
}