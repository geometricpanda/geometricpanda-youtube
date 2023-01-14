import {useStoryblokApi} from "@storyblok/astro";
import yt from "updated-youtube-info";

const storyblokApi = useStoryblokApi();

export const getPlaylists = async () => {

    const {data} = await storyblokApi.get('cdn/links', {
        "starts_with": "playlists/",
    });

    const links = Object.values(data.links);
    return links.filter(({is_folder}) => is_folder)
}

export const getPlaylist = async (name) => {

    const {data} = await storyblokApi.get('cdn/links', {
        "starts_with": `playlists/${name}`,
    });

    const links = Object.values(data.links);
    const [playlist] = links
        .filter(({is_folder}) => is_folder)
        .filter(({slug}) => slug.endsWith(name));

    return playlist;
}

export const getPlaylistVideos = async (name) => {
    const {data: {stories}} = await storyblokApi.get('cdn/stories', {
        "starts_with": `playlists/${name}/`,
        "content_type": "video"
    });

    return Promise.all(
        stories.map(async (story) => {
            const youtube = await yt(story.content.video_id);
            return {story, youtube}
        })
    );
}

export const getVideos = async () => {
    const {data: {stories}} = await storyblokApi.get('cdn/stories', {
        "starts_with": `playlists`,
        "content_type": "video"
    });

    return stories;
}


export const getVideo = async (playlist, slug) => {
    const {data: {story}} = await storyblokApi.get(`cdn/stories/playlists/${playlist}/${slug}`, {
        "content_type": "video"
    });

    const youtube = await yt(story.content.video_id);

    return {
        story,
        youtube,
    };
}
