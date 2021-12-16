import React from "react";
import clim1 from './clim1.jpeg';
import clim2 from './clim2.jpeg';
import barsik from './barsik.jpg';



const Text=()=>{
    return(
        <section class="text" id="text">
        <div class="container">
            <div class="text__subtitle" id="text__subtitle"> Расчет стоимости на чистку кровли от снега и льда:</div>
            <div  class="text__sum" id="text__sum" >
                <div class="text__grid">
                    <img class="img__grid" src={clim1} alt=""/>
                <li class="clear">Сбивание наледи и снега по краю кровли:<br/> <span>-</span> 1 м включительно - 110 рублей за погоный метр </li>
                </div>
                <div class="text__grid">
                    <img class="img__grid" src={clim2} alt=""/>
                <li class="clear">Полная очистка кровли:<br/>
                    <span>-</span>50 кв.м до 300 кв.м - 70 рублей<br/>
                    <span>-</span>300 кв.м до 1000 кв.м - 60 рублей<br/>
                    <span>-</span>От 1000 и более кв.м - 50 рублей<br/>
                </li>
                </div>
                <div class="text__grid">
                    <img class="img__grid" src={barsik} alt=""/>
                <li class="clear">Уборка снега техникой:<br/>
                    <span>-</span>1200&#8381;/час, минимум 4 часа<br/>
                    <span>-</span>А также выполним любые работы<br/>
                </li>
                </div>
            </div>
        </div>
        
    </section>
    );
}

export default Text