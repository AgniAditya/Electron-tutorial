export function isDev() : boolean {
    return process.env.NODE_ENV === 'development'
}

export const LLMmodels = async () => {
    const getAllModelsURL = process.env.GET_ALL_AVAILABLE_MODELS
    if(!getAllModelsURL){
        throw new Error("GET_ALL_AVAILABLE_MODELS is not set")
    }
    const url = getAllModelsURL
    const options = { method : 'GET'}

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}