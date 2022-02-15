class Footer {
    container;
    body;
    mainfooter;

    tour;
    hottour;

    social;

    constructor() {
        this.container = document.createElement("div");
        this.container.classList.add("row", "bg-footer");

        this.body = document.createElement("div");
        this.body.classList.add("row", "footer");
        this.body.innerHTML = `
        <section class="upper-footer">
            <div class="wrap">
                <ul class="widgets ts-row cf">
                    <li class="widget column col-4 widget-about">
                        <h5 class="widget-title has-style">About</h5>
                        <div class="author-image">
                            <img class=" lazyloaded" src="https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/09/about-footer.jpg" alt="About Me" data-src="https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/09/about-footer.jpg">
                        </div>
                        <div class="text about-text">
                            <p>Sed ut in perspiciatis unde omnis iste natus error sit on i  tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                        </div>
                    </li>
                    <li class="widget column col-4 widget-posts">
                        <h5 class="widget-title has-style">Latest Posts</h5>
                        <ul class="posts cf large">
                            <li class="post cf">
                                <div class="post-thumb">
                                    <a href="https://cheerup.theme-sphere.com/travel/blog/2016/05/15/my-new-yoga-pants/" class="image-link media-ratio ratio-1-1"><span data-bgsrc="https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-768x513.jpg" class="img bg-cover wp-post-image attachment-cheerup-768 size-cheerup-768 lazyloaded" role="img" data-bgset="https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-768x513.jpg 768w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-300x200.jpg 300w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-1024x684.jpg 1024w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-1536x1025.jpg 1536w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-450x300.jpg 450w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-1170x781.jpg 1170w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045.jpg 2000w" data-sizes="(max-width: 150px) 100vw, 150px" title="Epic Sea View of Santorini, Greece" style="background-image: url(&quot;https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-300x200.jpg&quot;);"></span></a>					
                                </div>
                                <div class="content">
                                    <div class="post-meta post-meta-b post-meta-left has-below">
                                        <h4 class="is-title post-title"><a href="https://cheerup.theme-sphere.com/travel/blog/2016/05/15/my-new-yoga-pants/">Epic Sea View of Santorini, Greece</a></h4>
                                        <div class="below meta-below"><a href="https://cheerup.theme-sphere.com/travel/blog/2016/05/15/my-new-yoga-pants/" class="meta-item date-link">
                                            <time class="post-date" datetime="2016-05-15T04:38:11+00:00">May 15, 2016</time>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="post cf">
                                <div class="post-thumb">
                                    <a href="https://cheerup.theme-sphere.com/travel/blog/2016/05/15/taking-a-short-walk/" class="image-link media-ratio ratio-1-1"><span data-bgsrc="https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849-768x512.jpg" class="img bg-cover wp-post-image attachment-cheerup-768 size-cheerup-768 lazyloaded" role="img" data-bgset="https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849-768x512.jpg 768w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849-300x200.jpg 300w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849-1024x682.jpg 1024w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849-1536x1024.jpg 1536w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849-450x300.jpg 450w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849-1170x780.jpg 1170w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849.jpg 2000w" data-sizes="(max-width: 150px) 100vw, 150px" title="How to Get The Most Out of Your London Trip" style="background-image: url(&quot;https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849-300x200.jpg&quot;);"></span></a>					
                                </div>
                                <div class="content">
                                    <div class="post-meta post-meta-b post-meta-left has-below">
                                        <h4 class="is-title post-title"><a href="https://cheerup.theme-sphere.com/travel/blog/2016/05/15/taking-a-short-walk/">How to Get The Most Out of Your London Trip</a></h4>
                                        <div class="below meta-below"><a href="https://cheerup.theme-sphere.com/travel/blog/2016/05/15/taking-a-short-walk/" class="meta-item date-link">
                                            <time class="post-date" datetime="2016-05-15T04:30:35+00:00">May 15, 2016</time>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="widget column col-4 widget-posts">
                        <h5 class="widget-title has-style">Popular Posts</h5>
                        <ul class="posts cf large">
                            <li class="post cf">
                                <div class="post-thumb">
                                    <a href="https://cheerup.theme-sphere.com/travel/blog/2016/05/14/eyes-still-sleepy/" class="image-link media-ratio ratio-1-1"><span data-bgsrc="https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1467269204594-9661b134dd2b-768x513.jpg" class="img bg-cover wp-post-image attachment-cheerup-768 size-cheerup-768 lazyloaded" role="img" data-bgset="https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1467269204594-9661b134dd2b-768x513.jpg 768w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1467269204594-9661b134dd2b-300x200.jpg 300w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1467269204594-9661b134dd2b-1024x684.jpg 1024w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1467269204594-9661b134dd2b-1536x1025.jpg 1536w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1467269204594-9661b134dd2b-450x300.jpg 450w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1467269204594-9661b134dd2b-1170x781.jpg 1170w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1467269204594-9661b134dd2b.jpg 2000w" data-sizes="(max-width: 150px) 100vw, 150px" title="Buildings Light up as The Night Approaches" style="background-image: url(&quot;https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1467269204594-9661b134dd2b-450x300.jpg&quot;);"></span></a>					
                                </div>
                                <div class="content">
                                    <div class="post-meta post-meta-b post-meta-left has-below">
                                        <h4 class="is-title post-title"><a href="https://cheerup.theme-sphere.com/travel/blog/2016/05/14/eyes-still-sleepy/">Buildings Light up as The Night Approaches</a></h4>
                                        <div class="below meta-below"><a href="https://cheerup.theme-sphere.com/travel/blog/2016/05/14/eyes-still-sleepy/" class="meta-item date-link">
                                            <time class="post-date" datetime="2016-05-14T13:07:17+00:00">May 14, 2016</time>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="post cf">
                                <div class="post-thumb">
                                    <a href="https://cheerup.theme-sphere.com/travel/blog/2016/05/14/on-pretty-flowers/" class="image-link media-ratio ratio-1-1"><span data-bgsrc="https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1464547323744-4edd0cd0c746-768x512.jpg" class="img bg-cover wp-post-image attachment-cheerup-768 size-cheerup-768 lazyloaded" role="img" data-bgset="https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1464547323744-4edd0cd0c746-768x512.jpg 768w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1464547323744-4edd0cd0c746-300x200.jpg 300w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1464547323744-4edd0cd0c746-1024x682.jpg 1024w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1464547323744-4edd0cd0c746-1536x1024.jpg 1536w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1464547323744-4edd0cd0c746-450x300.jpg 450w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1464547323744-4edd0cd0c746-1170x780.jpg 1170w, https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1464547323744-4edd0cd0c746.jpg 2000w" data-sizes="(max-width: 150px) 100vw, 150px" title="Mountains at This Time of The Year in California" style="background-image: url(&quot;https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1464547323744-4edd0cd0c746-450x300.jpg&quot;);"></span></a>					
                                </div>
                                <div class="content">
                                    <div class="post-meta post-meta-b post-meta-left has-below">
                                        <h4 class="is-title post-title"><a href="https://cheerup.theme-sphere.com/travel/blog/2016/05/14/on-pretty-flowers/">Mountains at This Time of The Year in California</a></h4>
                                        <div class="below meta-below"><a href="https://cheerup.theme-sphere.com/travel/blog/2016/05/14/on-pretty-flowers/" class="meta-item date-link">
                                            <time class="post-date" datetime="2016-05-14T13:11:47+00:00">May 14, 2016</time>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>`

        // this.mainfooter = document.createElement("div");
        // this.mainfooter.classList.add("row");

        // this.tour = document.createElement("div");
        // this.tour.classList.add("row");

        // this.hottour = document.createElement("div");
        // this.hottour.classList.add("row");

        // this.social = document.createElement("div");
        // this.social.classList.add("row");
    }

    render(appEle) {
        // this.mainfooter, this.tour, this.hottour, this.social
        this.container.append(this.body);
        appEle.appendChild(this.container);
    }
}
export default Footer;