export function Increseaction(a){
 return {'type': 'countIncrease' , payload: a}
}

export const Decresaction = a => (
    {'type':'countDecrese', payload: a}
)

export function resetaction(){
    return {'type': 'reset'}
}