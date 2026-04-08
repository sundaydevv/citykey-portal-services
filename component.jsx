export default function Component() {
    return (
        <div className="bg-bg-secondary font-[var(--font-sans)]">

            <header></header>

            <main className="flex flex-col mx-auto w-full max-w-[1180px] pb-15 sm:px-[clamp(30px,5vw,102px)] 2xl:px-0">

                {/*    services */}

                <div
                    className="w-full p-[24px_30px] bg-bg-primary rounded-xl md:rounded-b-[36px] text-heading-3 font-bold border border-border-primary">
                    <p>Сервисы</p>
                </div>

                {/*    resident card */}

                <article className="flex flex-col md:flex-row mt-2 bg-bg-menu rounded-[36px]">

                    <div
                        className="flex flex-col gap-6 w-full max-w-[586px] py-[clamp(32px,5vw,112px)] px-[clamp(16px,5vw,60px)]">

                        <div className="flex flex-col gap-2 max-w-[466px]">
                            <h1 className="text-heading-3 font-bold">Карта жителя</h1>
                            <p>Это удобная цифровая платформа для получения
                                доступа к городским услугам и сервисам.
                                Все, что вам нужно — на сайте и в приложении!</p>
                        </div>

                        <button type="button"
                                className="min-w-[155px] text-center w-[155px] h-[40px] rounded-md cursor-pointer bg-brand-primary text-text-inverse">
                            Оформить карту
                        </button>

                    </div>

                    <img className="w-full min-w-0 h-auto rounded-tr-[36px] rounded-br-[36px] hidden md:block"
                         src="/images/card-bg.png"
                         alt=""/>

                    <img className="rounded-b-[40px] md:hidden" src="/images/card-bg-adaptive.png" alt=""/>

                </article>

                {/*    transport */}

                <article
                    className="flex mt-15 pb-4 md:pb-0 bg-bg-primary rounded-t-[40px] rounded-b-xl border border-border-primary">

                    <div className="flex flex-col gap-8 w-full p-[32px_16px] md:py-12 md:px-[30px]">

                        <div className="flex justify-between flex-col md:flex-row">

                            <div className="flex flex-col gap-2 max-w-[466px]">
                                <p className="text-heading-2">ТРАНСПОРТ</p>
                                <p className="text-heading-4">Оплата проезда на транспорте и использование льготных
                                    проездных</p>
                            </div>

                            <img className="w-[150px] h-[160px] 2xl:hidden ml-auto"
                                 src="/images/transport/resident-card.png" alt=""/>

                        </div>

                        <div className="flex flex-col gap-1">

                            <div className="flex items-center gap-4 p-4 bg-bg-menu rounded-sm rounded-t-2xl">

                                <img className="w-[40px] h-[40px]" src="/images/transport/access.svg" alt=""/>

                                <div className="flex flex-col">
                                    <p className="font-bold">Оплата проезда</p>
                                    <p>Электронный кошелек, электронный проездной, льготные проездные</p>
                                </div>

                            </div>

                            <div className="flex items-center gap-4 p-4 bg-bg-menu rounded-sm">

                                <img className="w-[40px] h-[40px]" src="/images/transport/balance.svg" alt=""/>

                                <div className="flex flex-col">
                                    <p className="font-bold">Баланс и тариф</p>
                                    <p>Пополнение баланса и смена тарифа</p>
                                </div>

                            </div>

                            <div className="flex items-center gap-4 p-4 bg-bg-menu rounded-sm rounded-b-2xl">

                                <img className="w-[40px] h-[40px]" src="/images/transport/transport.svg" alt=""/>

                                <div className="flex flex-col">
                                    <p className="font-bold">История поездок</p>
                                    <p>Актуальная информация о тарифе и его смена</p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <img className="w-full max-w-[388px] h-[490px] rounded-tr-[40px] hidden 2xl:block"
                         src="/images/transport/transport-desktop-img.jpg" alt=""/>

                </article>

                {/*    social shield */}

                <section className="flex flex-col md:flex-row gap-2 mt-2">

                    <article
                        className="flex flex-col flex-1 bg-bg-primary rounded-xl border border-border-primary">

                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col gap-2 p-[32px_16px] md:pt-12 md:pl-[30px]">
                                <p className="text-heading-2 font-bold">СОЦИАЛЬНАЯ ПОДДЕРЖКА</p>
                                <p className="text-heading-4">Развивайтесь в одной из самых быстрорастущих индустрий с
                                    постоянно
                                    расширяющейся аудиторией</p>
                            </div>

                            <button type="button"
                                    className="ml-[16px] w-[117px] h-[40px] rounded-md bg-brand-primary text-text-inverse">Подробнее
                            </button>

                        </div>

                        <img className="max-h-[200px]" src="/images/social-shield.png" alt=""/>

                    </article>
                    {/*    payments */}

                    <article
                        className="flex flex-wrap flex-1 gap-[50px] bg-bg-primary rounded-xl border border-border-primary">

                        <div className="flex flex-col gap-2 p-[32px_16px] md:pt-12 md:pl-[30px]">
                            <p className="text-heading-2 font-bold">ЖКУ И ПЛАТЕЖИ</p>
                            <p className="text-heading-4">Развивайтесь в одной из самых быстрорастущих индустрий с
                                постоянно
                                расширяющейся аудиторией</p>
                        </div>

                        <img className="max-h-[200px] w-full" src="/images/calendar.png" alt=""/>

                    </article>

                </section>

                {/*    education */}

                <article
                    className="flex flex-col justify-between items-end md:flex-row mt-2 bg-bg-primary rounded-xl border border-border-primary">

                    <div className="flex flex-col gap-6 w-full p-[32px_16px_86px_16px] md:pt-12 md:px-[30px]">

                        <div className="flex flex-col gap-2">
                            <p className="text-heading-2 font-bold">ОБРАЗОВАНИЕ</p>
                            <p className="text-heading-4">Развивайтесь в одной из самых быстрорастущих индустрий с
                                постоянно
                                расширяющейся аудиторией</p>
                        </div>

                        <button type="button" className="w-[117px] h-[40px] rounded-md
            bg-brand-primary text-text-inverse
            hover:bg-brand-hover active:bg-brand-pressed cursor-pointer">
                            Подробнее
                        </button>

                    </div>

                    <img className=" h-[190px]" src="/images/education.png" alt=""/>

                </article>

                {/*    program */}

                <section className="flex flex-col gap-2 mt-2 pb-15 md:flex-row">

                    <article
                        className="flex flex-wrap justify-between gap-[50px] bg-bg-primary rounded-xl md:rounded-bl-[40px] border border-border-primary">

                        <div className="flex flex-col gap-2 p-[32px_16px] md:pt-12 md:pl-[30px]">
                            <p className="text-heading-2 font-bold">ПАРТНЕРСКИЕ ПРОГРАММЫ</p>
                            <p className="text-heading-4">Развивайтесь в одной из самых быстрорастущих индустрий с
                                постоянно
                                расширяющейся аудиторией</p>
                        </div>

                        <img className="w-full" src="/images/program-img.png" alt=""/>

                    </article>

                    {/*    events */}

                    <article
                        className="flex flex-wrap gap-6 bg-bg-primary rounded-xl md:rounded-br-[40px] border border-border-primary">

                        <div className="flex flex-col gap-6">

                            <div className="flex flex-col gap-2  px-4 pt-8 md:pt-12 md:pl-[30px]">
                                <p className="text-heading-2 font-bold">АФИША СОБЫТИЙ</p>
                                <p className="text-heading-4">Развивайтесь в одной из самых быстрорастущих индустрий с
                                    постоянно
                                    расширяющейся аудиторией</p>
                            </div>

                            <a href="#" className="ml-[16px] md:ml-8 text-heading-4 text-primary">Ссылка</a>

                        </div>

                        <img className="w-full" src="/images/event-img.png" alt=""/>

                    </article>

                </section>

                {/*    mobile app */}

                <section className="flex gap-2 py-15 text-text-inverse px-4 md:px-0">

                    <article className="flex-col gap-2 rounded-xl hidden lg:flex">

                        <div
                            className="flex flex-col items-center gap-4 max-w-[190px] h-[190px] px-6 py-10 bg-brand-pressed rounded-xl rounded-tl-[40px]">
                            <img className="w-[48px] h-[48px]" src="/images/mobile-app/mobile-app-success.png" alt=""/>
                            <p className="text-center">Удобная оплата проезда</p>
                        </div>

                        <div
                            className="flex flex-col items-center gap-4 max-w-[190px] h-[190px] px-6 py-10 bg-brand-hover rounded-xl rounded-bl-[40px]">
                            <p className="text-center">Афиша событий Билеты и акции</p>

                            <button type="button" className="w-[122px] h-[40px] rounded-md border-1">К событиям</button>

                        </div>

                    </article>

                    <article
                        className="relative flex flex-col items-center gap-8 flex-1  px-[clamp(20px,5vw,60px)] py-[clamp(42px,5vw,60px)] rounded-xl">

                        <img className="absolute inset-0 w-full h-full rounded-xl"
                             src="/images/mobile-app/mobile-app-bg.png" alt=""/>

                        <div className="relative flex flex-col gap-2">
                            <p className="text-center text-heading-2">Удобнее в приложении</p>
                            <p className="max-w-[370px] text-center">Все события, сервисы и бонусы у вас под рукой
                                — загрузите приложение Карта жителя</p>
                        </div>

                        <div className="relative flex justify-between gap-2">

                            <div className="flex justify-center flex-row flex-wrap max-w-[278px] xl:flex-col gap-2">
                                <img src="/images/mobile-app/app-store.png" alt=""/>
                                <img src="/images/mobile-app/app-google.png" alt=""/>
                                <img src="/images/mobile-app/rustore.png" alt=""/>
                            </div>

                            <img className="hidden xl:block" src="/images/mobile-app/mobile-app-qr.png" alt=""/>

                        </div>

                    </article>

                    <article className="flex-col gap-2 hidden lg:flex">

                        <div
                            className="flex flex-col items-center gap-4 max-w-[190px] h-[190px] px-6 py-10 bg-brand-hover rounded-xl rounded-tr-[40px]">
                            <div
                                className="flex justify-center items-center gap-2 w-[110px] h-[48px] rounded-[40px] bg-brand-pressed">

                                <svg width="11" height="19" viewBox="0 0 11 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.859863 0.907227L9.85986 9.43464L0.859863 17.9072"
                                          stroke="white"
                                          strokeWidth="2.5"
                                          strokeLinejoin="bevel"/>
                                </svg>

                                <span className="text-heading-3">500</span>

                            </div>
                            <p className="text-center">Контроль доступа в школы</p>
                        </div>

                        <div
                            className="flex flex-col items-center gap-4 max-w-[190px] h-[190px] px-6 py-10 bg-brand-pressed rounded-xl rounded-br-[40px]">
                            <img src="/images/mobile-app/mobile-app-all-services.png" alt=""/>
                            <p className="text-center">Все сервисы под рукой</p>
                        </div>

                    </article>

                </section>
            </main>

            <footer></footer>

        </div>
    )
}