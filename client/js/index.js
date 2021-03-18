const dropZone = document.getElementById("drop-zone")
const selectFileButton = dropZone.querySelector('input[type=file]')

if (dropZone) {  
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.target.classList.add("active");
  });
  
  dropZone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    e.target.classList.remove("active")
  })

  selectFileButton.addEventListener("change", (e) => {
    e.preventDefault()
    
    const images = e.target.files
  
    handleDrop(images)
  })
  
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault()
   
    const images = e.dataTransfer.files
  
    handleDrop(images)
  })
  
  function handleDrop(images) {
    images = [...images]
    images.forEach((image) => {
      uploadImage(image)
      if ("FileReader" in window) previewImage(image)
    })
  }
  
  function uploadImage(image) {
    const url = "/upload"
    const xhr = new XMLHttpRequest()
    const formData = new FormData()
    xhr.open("POST", url, true)
  
    formData.append("image", image)
    xhr.send(formData)
  }
  
  function previewImage(image) {
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onloadend = () => {
      const img = document.createElement("img")
      img.src = reader.result
      dropZone.appendChild(img)
    }
  }
}