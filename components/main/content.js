import Link from "next/link";
import classes from "./content.module.scss";
import { FaRegMoon } from "react-icons/fa";

import { useState, useEffect, useRef } from "react";
import React from "react";

export default function Navigation() {
  return (
    <>
      <div className={classes.overlay}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        vehicula maximus mauris ac tempus. Nunc ut quam tristique, aliquam lorem
        non, sagittis turpis. Nunc vel tellus euismod, tempus leo a,
        sollicitudin diam. Sed ac sapien at neque tristique blandit vel ac enim.
        Maecenas vitae tincidunt nisi, eu varius diam. Vestibulum suscipit
        efficitur lectus ac maximus. Ut eu metus id ante molestie tempus.
        Suspendisse egestas justo ut neque mollis consequat. Maecenas efficitur
        sagittis massa quis ultricies. Aenean at eros a augue mollis blandit.
        Vivamus vitae eros vehicula, imperdiet purus quis, consequat magna. Sed
        nec risus non tortor mollis viverra in sed est. Curabitur in iaculis
        felis, ac ultricies nisl. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Sed metus nulla, bibendum ac
        condimentum et, molestie in mauris. Quisque enim arcu, ornare quis
        turpis a, aliquam porttitor velit. In cursus velit quis hendrerit
        hendrerit. Sed elementum sit amet odio eu porttitor. Maecenas semper leo
        lacus, quis consequat justo cursus nec. Donec at nulla lorem. Aliquam
        convallis a quam id dignissim. Praesent luctus fringilla neque, in
        volutpat nunc hendrerit in. Donec nec porttitor ex. Proin ac luctus
        nulla, dignissim tempor quam. Donec eu felis leo. Nullam at sagittis
        erat, eget mollis elit. Fusce lorem arcu, aliquam quis purus nec,
        lobortis facilisis orci. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. In hac habitasse platea
        dictumst. Donec quis lectus neque. Mauris id vehicula orci. Pellentesque
        volutpat lorem at diam porta, ac luctus mi tincidunt. Integer feugiat a
        dui a pharetra. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Etiam nec magna eu turpis vestibulum consequat ut in quam.
        Vestibulum aliquet odio eu felis tincidunt, sit amet dictum mi viverra.
        Sed dolor diam, molestie et rutrum id, rhoncus a neque. Sed et
        consectetur enim. Maecenas at elit id leo placerat dignissim. Aenean eu
        vulputate tellus. Proin pellentesque lacus eget malesuada sagittis.
        Suspendisse potenti. Fusce hendrerit, ex non vulputate congue, risus sem
        auctor risus, suscipit tempus felis neque aliquam metus. In maximus
        velit neque,
      </div>
    </>
  );
}
