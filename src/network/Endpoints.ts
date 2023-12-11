// LOCAL
// const baseUrl = "http://localhost:8080"
// DEV 
// const baseUrl = "https://fourbi-service.onrender.com"
// Aws
// const baseUrl = "http://ec2-3-110-105-130.ap-south-1.compute.amazonaws.com:8080";

// AWS cloudfront url
const baseUrl = "https://dzm3ijcwfledm.cloudfront.net"

export const Endpoints = {
    coursesList: `${baseUrl}/course/all`,
    enroll: `${baseUrl}/enroll`,
    instructorTestimonials: `${baseUrl}/instructor/testimonials`
}