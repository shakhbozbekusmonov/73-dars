const Ichimliklar = () => {
    return (
        <section>
            <div className="container">
                <h2 className="text-[52px] font-bold text-neutral-800">
                    Ichimliklar
                </h2>
                <ul className="flex flex-wrap gap-[30px]">
                    <li className="flex w-[540px] border-[1px] border-solid border-neutral-400 rounded-[9px] pt-[30px] pr-[30px] pb-[14px] pl-[16px]">
                        <img src="/images/sprite.png" alt="Sprite" />
                        <div className="ml-[43px]">
                            <h3 className="font-medium text-2xl text-neutral-800 mb-[10px]">
                                Sprite 1L
                            </h3>
                            <p className="text-sm font-normal text-neutral-800">
                                Горячая закуска с митболами из говядины,
                                томатами, моцареллой и соусом чипотле
                            </p>
                            <div className="flex justify-between items-center pt-[13px]">
                                <p className="font-bold text-2xl text-neutral-800">
                                    6,000 UZS
                                </p>
                                <button className="bg-yellow-500 rounded-full text-white text-2xl w-[50px] h-[50px] pb-1">
                                    +
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="flex w-[540px] border-[1px] border-solid border-neutral-400 rounded-[9px] pt-[30px] pr-[30px] pb-[14px] pl-[16px]">
                        <img src="/images/cola.png" alt="Sprite" />
                        <div className="ml-[43px]">
                            <h3 className="font-medium text-2xl text-neutral-800 mb-[10px]">
                            Coca cola 1,5L
                            </h3>
                            <p className="text-sm font-normal text-neutral-800">
                                Горячая закуска с митболами из говядины,
                                томатами, моцареллой и соусом чипотле
                            </p>
                            <div className="flex justify-between items-center pt-[13px]">
                                <p className="font-bold text-2xl text-neutral-800">
                                    9,000 UZS
                                </p>
                                <button className="bg-yellow-500 rounded-full text-white text-2xl w-[50px] h-[50px] pb-1">
                                    +
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="flex w-[540px] border-[1px] border-solid border-neutral-400 rounded-[9px] pt-[30px] pr-[30px] pb-[14px] pl-[16px]">
                        <img src="/images/fanta.png" alt="Sprite" />
                        <div className="ml-[43px]">
                            <h3 className="font-medium text-2xl text-neutral-800 mb-[10px]">
                                Fanta 1L
                            </h3>
                            <p className="text-sm font-normal text-neutral-800">
                                Горячая закуска с митболами из говядины,
                                томатами, моцареллой и соусом чипотле
                            </p>
                            <div className="flex justify-between items-center pt-[13px]">
                                <p className="font-bold text-2xl text-neutral-800">
                                    6,000 UZS
                                </p>
                                <button className="bg-yellow-500 rounded-full text-white text-2xl w-[50px] h-[50px] pb-1">
                                    +
                                </button>
                            </div>
                        </div>
                    </li>
          
                </ul>
            </div>
        </section>
    );
};

export default Ichimliklar;
