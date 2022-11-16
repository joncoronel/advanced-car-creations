import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from "next/image";
import { useState } from "react";

export default function ImageViewer(props) {
  const [photoIndex, setIndex] = useState(0);
  const images = Object.keys(props.folder).map((pic, i) => {
    return props.folder[pic].default.src;
  });
  return (
    <div>
      {props.isModal && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => {
            props.setModal(false);
            setIndex(0);
          }}
          onMovePrevRequest={() =>
            setIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
  );
}
