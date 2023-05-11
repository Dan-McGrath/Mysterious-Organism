// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(id, dnaStrand) {
  return {
    'specimenNum': id,
    'dna': [dnaStrand],

    'mutate': function () {
      const dnaBases = ['A', 'T', 'C', 'G'];
      let randIdx = [Math.floor(Math.random()* 15)];
      let randDna = this.dna[0][randIdx];
      let newDna = dnaBases[Math.floor(Math.random() * 4)];

      if (randDna !== newDna) {
        this.dna[0][randIdx] = newDna;
      } else {
        this.mutate(); // if new and old dna match reruns function
      }

      return this.dna;
    }

  }
}


test = pAequorFactory(1, mockUpStrand());







