async function windowActions() {
    console.log('Window loaded');
    const form = document.querySelector('.field');
    const search = document.querySelector('#search');

    const request = await fetch('/api');
    const data = await request.json();
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired', search.value);
        const display = data.filter((record) => 
            record.zip === search.value);

            console.log(display);
            console.table(display);
        });

    search.addEventListener('input', (event) => {
        console.log('input', event.target.value);
    });
}
window.onload = windowActions;

        //const request = await fetch('/api', {
          //  method: 'POST',
            //headers: {
              //  'Content-Type': 'application/json'
        //},
        //body: JSON.stringify({ data: search.value})
  //      });
//        const data = await request.json();
    //    console.log(data);
        //console.table(data);