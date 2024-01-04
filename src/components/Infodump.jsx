import content from '../img/gmodcontent.png'

const InfoDump = ({ mode }) => {
    return (
        <div>
            {mode === "human" ? (
                <div id="InfoDump">
                    <div class="PageBlock">
                        <h2>Server Ip Address: [Placeholder] </h2>
                        <h2> Getting Black and Purple Textures?</h2>
                        <p> Click below and download the content pack</p>
                        <div className="contentPack">
                            <a href="https://gmodcontent.com">
                                <img src={content} alt="content" />
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div id="InfoDumpA">
                    <div class="PageBlock">
                        <h2>Server Ip Address: [Placeholder] </h2>
                        <h2> Getting Black and Purple Textures?</h2>
                        <p> Click below and download the content pack</p>
                        <div className="contentPack">
                            <a href="https://gmodcontent.com">
                                <img src={content} alt="content" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default InfoDump;