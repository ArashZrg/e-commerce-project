import { create } from 'zustand'

interface IStepperStore {
    step: number,
    setStep: (newStep:number) => void,
}
interface IAddressInfoStore {
    address: string,
    city: string,
    country: string,
    postalCode: string,
    setAddress: (newAddress:string) => void,
    setCity: (newCity:string) => void,
    setCountry: (newCountry:string) => void,
    setPostalCode: (newPostalCode:string) => void,
}

export const useStepperStore = create<IStepperStore> ((set) => ({
    step: 2,
    setStep: (newStep) => set(() => ({step : newStep})),
}))

export const useAddressInfoStore = create<IAddressInfoStore> ((set) => ({
    address: "",
    city: "",
    country: "",
    postalCode: "",
    setAddress: (newAddress) => set(() => ({ address: newAddress })),
    setCity: (newCity) => set(() => ({ city: newCity })),
    setCountry: (newCountry) => set(() => ({ country: newCountry })),
    setPostalCode: (newPostalCode) => set(() => ({ postalCode: newPostalCode })),
}))