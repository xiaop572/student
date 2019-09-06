let baseUrl = '';
if (process.env.NODE_ENV == 'production') {
    baseUrl = '生产';
} else if (process.env.NODE_ENV == 'development') {
    baseUrl = '开发'
}
export default {
    baseUrl
}