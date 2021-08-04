// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
const newStrand = []
for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
}
return newStrand
}
  
  
const pAequorFactory = (num, arr) => {
    return {
        specimenNum: num,
        dna: arr,

        mutate(){
            const tryToMutate = () =>{
                const before = this.dna;
                this.dna[Math.floor(Math.random() * this.dna.length)] = returnRandBase();
                const after = this.dna;
                if(before === after){
                    return false;
                }
                return true;
            }
            while(true){
                const attempt = tryToMutate();
                if (!attempt){
                    break
                }
            }
            return this.dna;

        },

        compareDNA(pAequor){
            let matches = 0;
            for(let i = 0; i < this.dna.length; i++){
                if(this.dna[i] === pAequor.dna[i]){
                    matches++;
                }
            };
            let percentage = Math.round((matches / this.dna.length) * 100);
            console.log(`These specimen have a ${percentage}% DNA match.`);
        },

        willLikelySurvive(){
            let cOrG = 0;
            for(let i = 0; i < this.dna.length; i++){
                if(this.dna[i] === 'C' || this.dna[i] === 'G'){
                    cOrG++;
                }
            };
            let percentage = Math.round((cOrG / this.dna.length) * 100);
            return(percentage >= 60 ? true : false);
        },

        complementStrand(){
            let complementDNAStrands = [];
            for(let i = 0; i < this.dna.length; i++){
                switch(this.dna[i]){
                    case 'A':
                        complementDNAStrands.push('T');
                        break;
                    case 'T':
                        complementDNAStrands.push('A');
                        break;
                    case 'C':
                        complementDNAStrands.push('G');
                        break;
                    case 'G':
                        complementDNAStrands.push('C');
                        break;
                    default:
                        complementDNAStrands.push('?');
                }
            };
            return complementDNAStrands;
        }
    }
}

let instancesList = [];
let instancesNumbers = [];
for(let i = 0; i < 30; i++){
    const generateRandNum = () => {
        let randomSpeciesNumber = Math.round(Math.random() * 1000);
        let notInNumList = false;
        while (!notInNumList){
            console.log('here');
            notInNumList = true;
            for(let i = 0; i < instancesNumbers.length; i++){
                if (instancesNumbers[i] === randomSpeciesNumber){
                    notInNumList = false;
                }
            }
        }
        instancesNumbers.push(randomSpeciesNumber);
        return randomSpeciesNumber;
    }

    const instance = pAequorFactory(generateRandNum(), mockUpStrand());
    instancesList.push(instance);
}

