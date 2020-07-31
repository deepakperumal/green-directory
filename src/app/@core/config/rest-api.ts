import { url } from "inspector";

import { baseUrl } from './config'


let env = baseUrl.dev

export const restUrl= {

   login:''+env+'api/auth/login'

} 