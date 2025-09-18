import dotenv from 'dotenv'

dotenv.config()

export function isDev() : boolean {
    return process.env.NODE_ENV === 'development'
}

export async function getAllLLMModels() {
    const getAllModelsURL = process.env.GET_ALL_AVAILABLE_MODELS
    if(!getAllModelsURL){
        throw new Error("GET_ALL_AVAILABLE_MODELS is not set")
    }
    const url = getAllModelsURL
    const options = { method : 'GET'}

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error while getting list of models",error);
    }
}

export async function getAllSoftwares() {
    return [
        "Blender"
    ]
}