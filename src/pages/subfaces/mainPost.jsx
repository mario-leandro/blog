import "@/css/mainPost.scss"
import typeText from "@/database/type-text"

export default function MainPost() {
    return (
        <main>
            { typeText.map((i) => (
            <div className="container" key={i.id}>
                <div className="apresentation">
                    <div className="title">
                        <h1>{i.title}</h1>
                    </div>

                    <div className="author">
                        <p>Por: <span>{i.author}</span></p>
                    </div>
                </div>
                
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis lectus vitae purus varius gravida. Vestibulum vel odio mi. Integer non diam et nisi rhoncus finibus at a ipsum. Sed at euismod nisi. Aliquam erat volutpat. Suspendisse potenti. Vivamus est justo, finibus ut risus et, porta viverra quam. Curabitur ligula metus, vulputate vitae imperdiet sed, vulputate a erat. Quisque vitae quam mauris. Integer interdum tincidunt tincidunt.</p>
            
                    <br />

                    <p>Cras eget pretium elit. Maecenas aliquam sapien sapien, eget convallis ante mattis sit amet. Duis et massa pharetra, consectetur nunc nec, scelerisque turpis. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc accumsan neque quis tincidunt molestie. Vestibulum imperdiet sit amet arcu ut varius. Duis aliquet nisl eros, eu tincidunt erat aliquam quis. Maecenas accumsan aliquet risus ac iaculis. Pellentesque condimentum, ex vitae imperdiet pulvinar, lectus quam vestibulum nibh, eget lobortis ante magna sed odio. Proin ac consectetur est. Proin sed turpis sit amet ipsum tempus volutpat. Nullam auctor elementum feugiat. Mauris aliquam lacus at tortor consectetur, rutrum iaculis lorem aliquet. Duis nec mauris congue, accumsan neque sed, posuere quam.</p>

                    <br />
                
                    <p>Aenean nec diam eu neque tempus sollicitudin. Phasellus faucibus, risus nec vestibulum tempor, ex erat condimentum tortor, quis lacinia metus lorem eget metus. Quisque gravida urna ac massa luctus suscipit. Morbi vulputate enim a felis aliquam rhoncus. Integer sagittis laoreet quam, ac dapibus risus volutpat ac. Donec luctus, massa vitae posuere volutpat, ipsum ante maximus mauris, viverra malesuada nibh enim id mi. Praesent porttitor ante et turpis maximus, semper finibus enim scelerisque.</p>

                    <br />
                    
                    <p>Integer vitae velit dui. Etiam viverra pretium turpis. Morbi in odio facilisis orci convallis rhoncus. Fusce porttitor, diam in ullamcorper eleifend, ex ligula convallis augue, quis laoreet lorem ipsum eget augue. Aenean lectus erat, semper sit amet orci tempor, elementum aliquam massa. In interdum erat eu sapien fermentum, nec tincidunt ligula convallis. Vestibulum et leo consequat, consectetur lorem lacinia, dapibus est. Nullam accumsan, lorem quis gravida aliquet, elit erat convallis erat, ac molestie orci felis nec felis. Aenean eget posuere ante.</p>

                    <br />

                    <p>Morbi malesuada, velit eget volutpat suscipit, mi nibh facilisis leo, eget congue nisl ligula ac tortor. Praesent eget lectus velit. Phasellus iaculis nunc et venenatis cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse semper eget nunc id ultrices. Cras quis ultrices tortor. Ut quis nisi leo. Donec non ante lacus. Vivamus cursus magna leo, ac venenatis felis vulputate non. Phasellus metus ligula, mattis nec velit in, varius viverra lacus.</p>

                    <br />

                    <p>Nam id felis sit amet nibh suscipit rutrum a sed odio. Sed at augue tristique, porta nunc ac, efficitur ipsum. Proin ultrices urna id est rhoncus, non gravida sem interdum. Morbi scelerisque elit eu nibh efficitur bibendum. Aenean tristique tellus id dignissim gravida. Phasellus finibus velit nec augue consectetur, sit amet fermentum lacus ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae augue ultrices, dignissim metus a, vestibulum lorem. Maecenas vel faucibus felis. Phasellus dapibus ex vitae dictum luctus. Etiam et iaculis dolor, eu faucibus augue. Proin nec arcu dictum, dapibus ipsum at, bibendum arcu. Maecenas rutrum nisl facilisis, tempus velit nec, porttitor orci. Integer justo augue, efficitur at ultrices id, pharetra nec dolor. Mauris fringilla malesuada scelerisque. Etiam quis leo pellentesque, maximus nunc pretium, luctus risus.</p>

                    <br />

                    <p>Morbi varius finibus mauris ut cursus. Pellentesque non tellus sit amet quam maximus facilisis vel vitae diam. Aenean eleifend, odio sed venenatis dignissim, ex sem semper neque, eu volutpat odio diam at ex. Sed erat eros, malesuada a fringilla a, tempor eu tellus. Ut ullamcorper lectus erat, quis fringilla elit mattis eget. Suspendisse convallis magna a mauris dapibus, ut scelerisque lorem mollis. Quisque nisi arcu, rutrum sit amet dictum vel, pellentesque vitae magna. Sed et vehicula sapien.</p>
                </div>

                <div className="data">
                    <p>Publicado em: <span>{i.data}</span></p>
                </div>
                
            </div>
            ))}
        </main>
    )
}