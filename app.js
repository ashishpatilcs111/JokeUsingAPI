async function show(){
    var d=await fetch("https://official-joke-api.appspot.com/random_joke");
    d=await d.json();
    document.getElementById('joke').innerHTML="Question--> "+d.setup+"    Answer--> "+d.punchline;
}
