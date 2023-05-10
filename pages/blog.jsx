import Head from "next/head";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Image from "next/image";
import styles from "../styles/blog.module.css"

export default function Blog(){
    return(
        <>
             <Head>
                <title>Peniacc Digital Solutions</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/logo3.png" />
                <meta charset="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
            </Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />

            <Navbar/>
            <div className={styles.service} id="service">
                <div className={styles.contents}>
                    <h1>Blogs Reviewed</h1>
                </div>                 
            </div>

            {/* <h1>hello James</h1> */}
            <div className={styles.blogContainer}>
                {/* box1 */}
                <div className={styles.blogBox}>
                    {/* img1 */}
                    <div className={styles.blogImage}>
                        <Image src="/assets/AI.jpg" width={750} height={450} alt=""/>
                    </div>
                    {/* blogtext */}
                    <div className={styles.blogText}>
                        <span>19 April 2023/ Technology</span>
                        <h6 className={styles.blogTitle}>Why CMOs must cross the technical divide</h6>
                        <p>Today&apos;s CMOs should prioritize marketing technology strategy and work hand in hand with their technology lead. Advances in AI will serve as a forcing function in this regard</p>
                        <a href="https://martech.org/">Read More</a>
                    </div>
                </div>
                <div className={styles.blogBox}>
                    {/* img1 */}
                    <div className={styles.blogImage}>
                        <Image src="/assets/email.jpg" width={750} height={450} alt=""/>
                    </div>
                    {/* blogtext */}
                    <div className={styles.blogText}>
                        <span>06 April 2023/ Email Marketing</span>
                        <h6 className={styles.blogTitle}>How email marketing platforms help brands succeed</h6>
                        <p>As excited as digital marketers get about the shiny new thing (I&apos;m looking at you, AI), one of the first and most-established forms of online marketing – email – remains the backbone of most companies&apos; programs</p>
                        <a href="https://martech.org/">Read More</a>
                    </div>
                </div>
                <div className={styles.blogBox}>
                    {/* img1 */}
                    <div className={styles.blogImage}>
                        <Image src="/assets/tech1blog.jpg" width={750} height={450} alt=""/>
                    </div>
                    {/* blogtext */}
                    <div className={styles.blogText}>
                        <span>29 March 2023/  Technology</span>
                        <h6 className={styles.blogTitle}>Platform Engineering: A DevOps evolution, not a replacement</h6>
                        <p>Platform engineering is a hot topic in modern software development and delivery, with some claiming it is the replacement for DevOps, or even declaring&quot;DevOps is dead.&quot; But amidst the hype, it&apos;s important to understand platform engineering is, in fact, an evolution of infrastructure delivery, not a replacement, built upon core philosophies that underpin DevOps.</p>
                        <a href="https://www.pluralsight.com/">Read More</a>
                    </div>
                </div>
                <div className={styles.blogBox}>
                    {/* img1 */}
                    <div className={styles.blogImage}>
                        <Image src="/assets/concepts.jpg" width={750} height={450} alt=""/>
                    </div>
                    {/* blogtext */}
                    <div className={styles.blogText}>
                        <span>29 March 2023/ SE Optimization</span>
                        <h6 className={styles.blogTitle}>Blog SEO: How to Optimize Your Blog for Search Engines</h6>
                        <p>Blog SEO is the process of using technical and on-page SEO techniques to increase your blog&apos;s visibility in organic search. When using blog SEO, you have two primary goals:</p>
                        <a href="https://www.semrush.com/">Read More</a>
                    </div>
                </div>
                <div className={styles.blogBox}>
                    {/* img1 */}
                    <div className={styles.blogImage}>
                        <Image src="/assets/markblog.jpg" width={750} height={450} alt=""/>
                    </div>
                    {/* blogtext */}
                    <div className={styles.blogText}>
                        <span>17 February 2023/ Digital Marketing</span>
                        <h6 className={styles.blogTitle}>Here&apos;s What Drives Brand Lift in Emerging Media</h6>
                        <p>Marketers continue to invest in digital media, expected to account for about 60% of their media spending in the US this year. Newer channels (relative to legacy media) such as social media, podcast ads, and native advertising are seeing budget increases globally</p>
                        <a href="https://www.marketingcharts.com/">Read More</a>
                    </div>
                </div>
                <div className={styles.blogBox}>
                    {/* img1 */}
                    <div className={styles.blogImage}>
                        <Image src="/assets/compblog.jpg" width={750} height={450} alt=""/>
                    </div>
                    {/* blogtext */}
                    <div className={styles.blogText}>
                        <span>10 January 2023/ Technology</span>
                        <h6 className={styles.blogTitle}>Fixing a Frozen Computer: 6 Ways to Troubleshoot</h6>
                        <p>Whether it&apos;s a personal device or work laptop, frozen computer screens always seem to pop up at the worst possible moment. Fortunately, there are a number of different remedies available to help you minimize downtime and get back to work as quickly as possible when your computer is frozen.</p>
                        <a href="https://www.electric.ai/">Read More</a>
                    </div>
                </div>

            </div>

            <Footer/>
        </>
    );
}