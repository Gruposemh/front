import "../../../styles/Home/Atividades-section/style.css"
import CardAtividades from "../../Cards/CardAtividades";
import Title from "../../Title";
import ballet from "../../../assets/Home/icon-ballet.png"
import box from "../../../assets/Home/icon-box.png"
import capoeira from "../../../assets/Home/icon-capoeira.png"
import danca from "../../../assets/Home/icon-danca.png"
import muayThai from "../../../assets/Home/icon-muay.png"

import { Swiper, SwiperSlide } from 'swiper/react'



const AtividadeSection = () => {

    
  const atividades = [
    { id: '1', name:"Ballet", image: ballet },
    { id: '2', name:"Box", image: box },
    { id: '3', name:"Capoeira", image: capoeira },
    { id: '4', name:"Muay Thai", image: muayThai },
    { id: '5', name:"Dança", image: danca },
   
  ]

    
    return(
        <>
        <section className="atividades">
            <Title title= "Conheça nossas atividades "/>
            <div className="atividades-container">
                 <Swiper
                slidesPerView={4}          
                spaceBetween={20}          
                pagination={{ clickable: true }}
                navigation
                
            >
                {atividades.map((atividade) => (
                    <SwiperSlide key={atividade.id}>
                        <CardAtividades
                            image={atividade.image}
                            name={atividade.name}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </section>

        </>
      
    )
}

export default AtividadeSection;