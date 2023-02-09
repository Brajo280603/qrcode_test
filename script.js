let input = document.getElementById("contentinput");
document.getElementById("generate").addEventListener("click",()=>{
  let canvas = document.createElement('canvas');
  let options = {
    bcid        : 'qrcode',       // Barcode type
    text        : input.value,    // Text to encode
    scale       : 3,               // 3x scaling factor
    // height      : auto,              // Bar height, in millimeters
    includetext : true,            // Show human-readable text
    textxalign  : 'center',        // Always good to set this
  }
  try{
    bwipjs.toCanvas(canvas,options);
    document.getElementById('imgqr').src = canvas.toDataURL('image/png');
    document.getElementById('download').href = canvas.toDataURL('image/png');
  }catch(e){
  
  }
})