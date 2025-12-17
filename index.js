console.log("npx @tailwindcss/cli -i ./estilo.css -o ./output.css --watch")
//////////////////////////////////////////////////

const dropdown = () => {
    let link = document.getElementById("dropbtn")
    if(link.style.display == "none"){
        link.style.display = "flex"
    }else{
        link.style.display = "none"
    }
}