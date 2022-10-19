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
        velit neque, non blandit augue congue ut. Integer sit amet libero sit
        amet est pellentesque pellentesque eget ac neque. Maecenas id euismod
        felis. Sed varius velit massa, eu volutpat lectus suscipit ac.
        Vestibulum congue ante at dapibus sollicitudin. Fusce quis iaculis
        justo, vitae feugiat justo. Etiam vel finibus sem. Ut viverra fermentum
        sem sed fringilla. Donec laoreet eget augue vel mollis. Sed facilisis et
        mauris et vulputate. Phasellus viverra sit amet lectus ultrices lacinia.
        Suspendisse tristique aliquam elit eget finibus. Aliquam id erat
        imperdiet, ullamcorper nisl sed, placerat justo. Sed diam turpis,
        eleifend at tortor iaculis, fringilla cursus neque. Suspendisse lacinia
        felis vitae orci consectetur porta. Duis eget lorem dolor. Curabitur
        ullamcorper et turpis sed eleifend. Aliquam accumsan eget magna at
        pulvinar. Curabitur congue felis at massa mollis, quis blandit purus
        placerat. Donec a risus nibh. Fusce pretium nisl vulputate nunc ornare
        sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Aenean vitae nunc quam. Curabitur
        maximus, sem vitae euismod rhoncus, sapien enim pretium magna, a posuere
        quam ligula et metus. Etiam nec ligula turpis. Curabitur imperdiet urna
        ut interdum feugiat. Mauris mollis convallis quam, eget blandit lacus
        eleifend a. Maecenas non ante sed nulla viverra pharetra vel sit amet
        justo. Etiam aliquam ullamcorper nunc, id lacinia urna porta a. Nullam
        luctus vel lectus quis posuere. Duis et hendrerit odio, tincidunt ornare
        tellus. Donec egestas quis sapien ac convallis. Aenean tincidunt pretium
        sapien id viverra. Mauris ultrices ligula leo, vel placerat est
        tincidunt auctor. Mauris nibh felis, condimentum id porta eu, dignissim
        vel sapien. Suspendisse potenti. Aenean scelerisque sed augue ac
        malesuada. Proin at porta leo, et scelerisque odio. Praesent volutpat
        tortor et orci laoreet, nec feugiat lacus suscipit. Suspendisse
        vulputate odio eget leo vestibulum placerat. Donec eget turpis ex.
        Aenean dictum tempor mauris at feugiat. Donec blandit, metus at tempus
        ultrices, lorem augue euismod magna, sit amet vestibulum orci nisi ac
        magna. Sed sed mi eu metus ullamcorper accumsan. Nam rutrum pharetra
        massa, iaculis maximus nibh fermentum vel. Mauris at ipsum vel elit
        porta hendrerit posuere vitae ante. Vestibulum imperdiet dictum metus
        eget volutpat. Vivamus vitae odio nec felis placerat molestie. Phasellus
        ornare finibus felis sit amet dignissim. Proin sem augue, volutpat non
        erat in, lacinia volutpat augue. Vivamus elementum efficitur dignissim.
        Sed ante lacus, mollis a vestibulum ut, gravida eget elit. Nullam
        dignissim mi velit, in blandit dolor accumsan sit amet. Sed interdum
        purus erat, at dignissim lacus eleifend a. Duis est neque, malesuada ut
        dignissim vel, laoreet sed dolor. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Nulla facilisi. Donec sed nulla auctor,
        sollicitudin mi sed, semper diam. Nunc non turpis sem. Duis eros leo,
        lobortis sit amet ex sed, pellentesque congue magna. Vivamus dapibus
        interdum nunc nec gravida. Vestibulum ipsum augue, commodo a condimentum
        sit amet, congue ut nisl. Phasellus nunc augue, ultricies eget interdum
        molestie, feugiat ac turpis. In dictum leo ligula, id mollis mi commodo
        ac. Praesent nec mi tincidunt, convallis leo ultricies, ornare ex. Sed
        hendrerit ut justo ac eleifend. Vivamus gravida volutpat pulvinar. Etiam
        ut hendrerit lectus, vitae lacinia dui. Ut pulvinar elit eget leo
        aliquet imperdiet. Donec ornare, dolor nec rhoncus cursus, ex nibh
        cursus massa, non sagittis magna ligula iaculis lacus. Ut tristique nec
        nulla eget finibus. Vivamus tincidunt dolor convallis risus tincidunt,
        id ultrices sem luctus. Nullam purus mauris, pulvinar ac dui eu,
        suscipit auctor erat. Phasellus lacinia est et mi maximus, sit amet
        pharetra nulla lacinia.
      </div>
    </>
  );
}
