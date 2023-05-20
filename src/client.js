import sanityClient from "@sanity/client";
export default sanityClient({
    projectId: 'bx811ze2',
    dataset: 'production',
    apiVersion: '2021-10-21', // use a UTC date string
    useCdn: true,
})