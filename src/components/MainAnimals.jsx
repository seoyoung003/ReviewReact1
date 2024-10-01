export default function MainAnimals({image, title, description}) {  //prop.image에서 객체화시켜서 {image} 이렇게 ()안에 넣을 수 있는것!!!
    return(
        <li>
            <img src={ image } alt={ title } />
            <h4>{ title }</h4>
            <p>{ description }</p>

        </li>
    );
}