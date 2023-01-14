const COLOUR = {
    WHITE: '#FFF',
    BLACK: '#000',
    REACT: '#61DBFB',
}

const KNOWN_TAGS = {
    ANGULAR: 'angular',
    ANGULAR_UNIVERSAL: 'angular-universal',
    REACT: 'react',
    NEXTJS: 'nextjs',
    JAVSCRIPT: 'javascript',
    CSS: 'css',
    HTML: 'HTML',
    ACCESSIBILITY: 'ACCESSIBILITY',
}

const canonicalTags = [
    KNOWN_TAGS.ANGULAR_UNIVERSAL,
    KNOWN_TAGS.ANGULAR,
    KNOWN_TAGS.NEXTJS,
    KNOWN_TAGS.REACT,
    KNOWN_TAGS.ACCESSIBILITY,
    KNOWN_TAGS.CSS,
    KNOWN_TAGS.HTML,
]

export const getCanonicalTag = (tags) => {
    const priorityTags = tags
        .map(tag => ({tag, position: canonicalTags.indexOf(tag)}))
        .sort((a, b) => a.position > b.position ? -1 : 1)
        .filter(({position}) => position > -1);

    if (priorityTags.length) {
        return priorityTags[0].tag;
    }

    const [first] = tags
        .sort((a, b) => a > b ? 1 : -1)

    return first;

}

export const getTagAccent = (tags) => {
    const tag = getCanonicalTag(tags);

    if (tag === KNOWN_TAGS.REACT) {
        return {
            tagBackground: COLOUR.REACT,
            tagColor: COLOUR.BLACK,
        }
    }

    return 'unset';
}
