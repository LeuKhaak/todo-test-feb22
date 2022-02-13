import React from "react";
import styles from "./styles.module.scss";
import logo from "../../../assets/images/logo.png";

function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>My ToDo List</h1>
        <img className={styles.logo} src={logo} alt="#" />
        <p className={styles.inf}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          tellus magna. Proin lobortis nibh sed metus congue dapibus. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo
          ultricies odio, ac malesuada metus. In et metus iaculis, consectetur
          sapien a, varius erat. Etiam tempor nulla metus, quis facilisis nulla
          ultricies at. Aenean vulputate, dolor vitae convallis volutpat, orci
          dui pulvinar arcu, et suscipit turpis neque et enim. In sed ipsum
          fringilla, sodales felis nec, tempus tellus. Nunc quis urna mollis,
          laoreet tellus in, ornare urna. Morbi ut enim egestas massa dignissim
          efficitur nec nec metus. Nam egestas nisl suscipit mauris porta, ut
          mollis arcu posuere.
        </p>
        <p className={styles.inf}>
          Donec auctor mattis aliquam. In dapibus ipsum augue. Donec feugiat
          libero augue. Curabitur sed dui eros. Etiam quis quam ut est iaculis
          imperdiet. Sed quis metus eu orci tincidunt volutpat. Vestibulum ex
          orci, condimentum ut augue id, condimentum pretium felis. Pellentesque
          ut tincidunt risus, sit amet mattis turpis. Quisque magna dui,
          ullamcorper aliquet dignissim a, pretium nec felis. Nullam lobortis eu
          massa et bibendum. Cras a dui ultricies, elementum sem ac, pulvinar
          velit. Donec gravida placerat placerat. Sed aliquet erat at dolor
          molestie iaculis. Proin aliquet mauris at congue congue. Nulla pretium
          ullamcorper leo vel luctus. Nunc sagittis orci in purus facilisis
          fermentum. Fusce lobortis justo nibh, eu sagittis nisi iaculis a.
        </p>
        <p className={styles.inf}>
          Quisque sodales ultricies eleifend. Nulla facilisi. Etiam sit amet
          libero nec nisi blandit posuere. Fusce non pulvinar libero. Nulla eu
          purus volutpat, porta elit ut, convallis diam. Phasellus ac erat a
          tortor tempor tempor eu quis lectus. Donec dolor orci, imperdiet et
          sagittis at, imperdiet eu nunc. Ut dapibus, diam sit amet blandit
          pretium, libero enim laoreet lectus, sed finibus sem massa et quam.
          Vivamus vulputate lectus ut diam sollicitudin, id lacinia nibh dictum.
          Maecenas eget pretium purus.
        </p>
      </div>
    </section>
  );
}

export default Main;
