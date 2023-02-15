let input = document.getElementById("contentinput");

let json = {
  rid:123559489,
  status:"WIP",
  current:"Pickling",
  length:123,
  width:155,
  thickness:22,
  remarks:"some stuff written by some one"
}

let jsonText = JSON.stringify(json);
console.log(jsonText);
console.log(JSON.parse(jsonText));

document.getElementById("generate").addEventListener("click",()=>{
  let canvas = document.createElement('canvas');
  let options = {
    bcid        : 'qrcode',       // Barcode type
    text        : input.value,    // Text to encode
    scale       : 1,               // 1x scaling factor
    height      : 150,              // Bar height, in millimeters
    width       : 150,
    includetext : true,            // Show human-readable text
    textxalign  : 'center',        // Always good to set this
    backgroundcolor:'red'
  }
  try{
    bwipjs.toCanvas(canvas,options);
    document.getElementById('imgqr').src = canvas.toDataURL('image/png');
    document.getElementById('download').href = canvas.toDataURL('image/png');
  }catch(e){
    console.error(e)
  }
})