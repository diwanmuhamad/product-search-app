const config = 
    {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
        },
        crossorigin: true,    
    }


async function getData<T>(url: string): Promise<T>{
    return fetch(url, config)
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
        // Handle the error.
            console.log(error)
        })
  }

export {getData}