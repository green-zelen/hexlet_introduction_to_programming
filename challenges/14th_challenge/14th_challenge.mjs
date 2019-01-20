const dnaToRna = (dna) => {
    let rna = '';
    if (dna.length === 0) {
        return '';
    }
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'G':
                rna += 'C';
                break;

            case 'C':
                rna += 'G';
                break;

            case 'T':
                rna += 'A';
                break;

            case 'A':
                rna += 'U';
                break;
        
            default:
                return null;
        }
    }
    return rna;
}

export default dnaToRna;