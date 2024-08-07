import { pipeline, env } 
    from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0'

env.allowLocalModels = false;

const fileUpload = document.getElementById('file-upload')
const imageContainer = document.getElementById('image-container')
const status = document.getElementById('status');

status.textContent = '加载模型...'
// linux pipe 管道 nlp任务的类型  
// const detector = await pipeline("object-detection", 
    // "Xenoval/detr-resnet-50")
status.textContent="准备"

fileUpload.addEventListener('change', function(e) {
    const file = e.target.files[0]
    if (!file) return;

    const reader = new FileReader()

    reader.onload = function(e2) {
        imageContainer.innerHTML=''
        const image = document.createElement('img')
        image.src = e2.target.result;
        console.log(e2.target.result, '////') // base64 
        imageContainer.appendChild(image)
        detect(image)
    }
    reader.readAsDataURL(file);
})