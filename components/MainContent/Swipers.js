import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

const App = (props) => {
  const damn = Object.keys(props.folder).map((pic, i) => {
    return props.folder[pic];
  });

  return (
    <Lightbox
      styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
      open={props.isModal}
      close={() => props.setModal(false)}
      slides={damn}
      plugins={[Thumbnails, Fullscreen]}
      render={{
        slide: (image, offset, rect) => {
          const width = Math.round(
            Math.min(
              rect.width,
              (rect.height / image.default.height) * image.default.width
            )
          );

          const height = Math.round(
            Math.min(
              rect.height,
              (rect.width / image.default.height) * image.default.height
            )
          );

          return (
            <div
              style={{
                position: "relative",
                width: width,
                height: height,
              }}
            >
              <Image
                src={image}
                layout="fill"
                priority={props.isModal}
                placeholder="blur"
                objectFit="contain"
                alt={"alt" in image ? image.alt : ""}
                sizes={
                  typeof window !== "undefined"
                    ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                    : `${width}px`
                }
              />
            </div>
          );
        },
        thumbnail: (slide, rect, render, imageFit) => {
          return (
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src={slide.slide.default.src}
                layout="fill"
                priority={props.isModal}
              />
            </div>
          );
        },
      }}
    />
  );
};

export default App;
