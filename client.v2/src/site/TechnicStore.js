import {makeAutoObservable} from 'mobx'
// страница техники(вертолетов)

// взаимодействие с mobx, хранение данных
export default class TechnicStore {
   
    constructor() {
        this._technics = [
            {id: 1, 
            name: 'Ми-2', 
            contain: 5,
            maxTimeOn: 3, 
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Nassau_County_Police_Bell_407.jpg/1200px-Nassau_County_Police_Bell_407.jpg'},
            {id: 2, 
            name: 'Ка-226', 
            contain: 4,
            maxTimeOn: 3, 
            image:'https://media.gq-magazine.co.uk/photos/5d1398faeef921e6e09ff155/16:9/pass/airbus-helicopters-4-gq-3jun15-pr_b.jpg'},
            {id: 3, 
            name: 'Robinson R44', 
            contain: 4,
            maxTimeOn: 3, 
            image:'https://www.helipass.com/t/img_helico/R44.png'},
            {id: 4, 
            name: 'МиГ-27', 
            contain: 3,
            maxTimeOn: 4, 
            image:'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2hlbGljb3B0ZXItYS03LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6IjEyMDAifX19'},
        ]
        this._selectedTechnic={}
        makeAutoObservable(this)
    }

    setTechnics(technics) {
        this._technics = technics
    }
    setSelectedTechnic(technic) {
        this._selectedTechnic = technic
    }

    get technics() {
        return this._technics
    }
    get selectedTechnic() {
        return this._selectedTechnic
    }
}