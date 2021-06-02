import {User} from './User'
import {Company} from "./Company";
import {CustomMap} from "./CustomMap";


const user: User = new User();
const company: Company = new Company()

console.log("yes")

const customMap: CustomMap = new CustomMap("map")
customMap.addMarker(user)
customMap.addMarker(company)






