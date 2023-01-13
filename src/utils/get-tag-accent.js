const COLOUR = {
    WHITE: '#FFF',
    BLACK: '#000',
    REACT: '#61DBFB',
}

export const getTagAccent = (tags) => {

    if (tags.includes('react')) {
        return {
            tagBackground: COLOUR.REACT,
            tagColor: COLOUR.BLACK,
        }
    }
    //
    // if (tags.includes('coding')) {
    //     return {
    //         tagBackground: COLOUR.BLACK,
    //         tagColor: COLOUR.WHITE,
    //     }
    // }


    return 'unset';

}
