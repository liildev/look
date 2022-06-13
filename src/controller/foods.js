import {read, write} from '../utils/moduls.js'

let foodsController = {
    GET: (req, res) => {
        let foods = read('foods')
        res.send(foods)
    }
}

export default foodsController