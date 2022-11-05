export async function getShelterList() {
    const endpoint = "http://localhost:8000/api/shelter_list";

    const response = await fetch(endpoint, { 
        method: "GET"
    });
    
    if (response.ok) {
        const json = await response.json();
        return json;
    }

    throw new Error(`Response ${response.status}: ${response.statusText} - ${await response.text()}`);
}

