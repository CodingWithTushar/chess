import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex bg-[#302E2B] h-full text-white  flex-col ml-28 ">
        <div className="text-white flex  gap-20 justify-center items-center   mt-16  ">
          <Link href={"https://www.chess.com/play/online"}>
            {" "}
            <img
              src="https://www.chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png"
              alt=""
              width={500}
            />
          </Link>
          <div className="flex flex-col items-center my-6 mt-7 p-1">
            <h1 className="text-5xl font-bold text-center">
              Play Chess Online <br /> on the #1 Site!
            </h1>
            <div className="flex my-7 ">
              <h6 className="text-[#989795] mx-16"> Games Today</h6>
              <h6 className="text-[#989795] mx-16">Playing Now</h6>
            </div>
            <div className="bg-[#81B64C] rounded-md flex gap-5 p-3 px-16 shadow shadow-[#81B64C] cursor-pointer hover:bg-[#9CCA5D] my-5">
              <img
                src="https://cdn-icons-png.flaticon.com/128/994/994304.png"
                alt=""
                width={70}
              />
              <div className="flex flex-col m-2 justify-start ">
                <h1 className="text-3xl font-bold">Play Online</h1>
                <h6 className="text-xs">Play With Someone at your level</h6>
              </div>
            </div>
            <div className="bg-[#454341] rounded-md flex gap-5 p-3 px-16 my-4 shadow shadow-[#454341] hover:bg-[#4D4C49]">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1129/1129398.png"
                alt=""
                width={70}
              />
              <div className="flex flex-col m-2 justify-start cursor-pointer ">
                <h1 className="text-3xl font-bold">Play Bots</h1>
                <h6 className="text-xs">Play vs customizable training bots</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-[#262522] gap-20 mt-16 justify-center rounded p-7 items-center mx-[380px]    ">
          <div className="flex flex-col items-center   ">
            <div className="my-12">
              <h1 className="text-3xl font-bold">Solve Chess Puzzles</h1>
            </div>

            <div className="rounded-md bg-[#81B64C] shadow-[#81B64C]  hover:bg-[#9CCA5D] cursor-pointer p-3 text-2xl font-bold w-52 text-center mb-12 ">
              Solve Puzzles
            </div>

            <div className="flex items-center gap-12  m-3 ">
              <div>
                <img
                  src="https://www.chess.com/bundles/web/images/faces/hikaru-nakamura.e1ca9267.jpg"
                  alt=""
                />
              </div>

              <div className="font-semibold text-[#C3C2C1]">
                <div className="">
                  <h1>
                    Puzzles are the best way to <br /> improve pattern
                    recognition, and <br /> no site does it better.
                  </h1>
                </div>

                <div className="flex gap-2 mt-3">
                  <div className="bg-pink-950">GM</div>
                  <div>Hikaru Nakamura</div>
                </div>
              </div>
            </div>
          </div>

          <div>
          <Link href={"https://www.chess.com/puzzles/rated"}> 
            <img
              src="https://www.chess.com/bundles/web/images/web/board-puzzles.4a54c49f@2x.png"
              alt=""
              width={400}
            />
            </Link>
          </div>
        </div>

        <div className="flex bg-[#262522] gap-20 mt-8 justify-center rounded p-7   items-center mx-[380px] m-2  ">
          <div>
            <Link href={"https://www.chess.com/lessons"}>
            <img
              src="https://www.chess.com/bundles/web/images/web/board-lessons.825946d3@2x.png"
              alt=""
              width={400}
              />
              </Link>
          </div>

          <div className="flex flex-col items-center   ">
            <div className="my-12">
              <h1 className="text-3xl font-bold">Take Chess Lessons</h1>
            </div>

            <div className="rounded-md bg-[#81B64C] shadow-[#81B64C]  hover:bg-[#9CCA5D] cursor-pointer p-3 text-2xl font-bold w-52 text-center mb-12 ">
              Start Lessons
            </div>

            <div className="flex items-center gap-12  m-3 ">
              <div>
                
                <img
                  src="https://www.chess.com/bundles/web/images/faces/anna-rudolf.193d08a5.jpg"
                  alt=""
                />
                
              </div>

              <div className=" text-[#C3C2C1] font-semibold">
                <div>
                  <h1>
                    Chess.com lessons make it easy to <br /> learn to play, then
                    challenge you <br /> to continue growing.
                  </h1>
                </div>

                <div className="flex gap-2">
                  <div className="bg-pink-950">IM</div>
                  <div>Anna Rudolf</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-4xl font-bold justify-center text-center flex m-10 mb-15">
          Follow the 2024 FIDE World Championship LIVE with the BEST <br />
          coverage.
        </div>

        <div className="flex font-semibold justify-center gap-10   ">
          <div className="">
            <Link
              href={
                "https://www.chess.com/news/view/2024-fide-world-rapid-chess-championship-day-3"
              } className="hover:brightness-75"
            >
              <img
                src="https://images.chesscomfiles.com/uploads/v1/news/1564749.0f76f182.507x286o.51bf1d1da300.png"
                alt=""
              />

              <div className="text-center mt-7">
                Murzin Wins Rapid World Championship, Humpy Earns <br /> 2nd
                Title In Women
              </div>

              <div className="text-center text-[#C3C2C1]  gap-3 flex justify-center m-1  ">
                <div className="text-center">
                  <h4 className="bg-pink-950 w-10">NM</h4>
                </div>
                <div className="text-center">AnthonyLevin</div>
              </div>
            </Link>
          </div>

          <div className="">
            <Link
              href={
                "https://www.chess.com/news/view/ediz-gurel-wins-bullet-brawl-december-28-2024"
              } className="hover:brightness-75"
            >
              <img
                src="https://images.chesscomfiles.com/uploads/v1/news/1564783.552b9cbf.507x286o.c354bd92702c.png"
                alt=""
              />

              <div className="text-center mt-7">
                Gurel Claims 2nd Bullet Brawl Title, Carlsen Joins Late <br />{" "}
                Following Jeansgate
              </div>

              <div className="text-center text-[#C3C2C1] m-1 ">JackRodgers</div>
            </Link>
          </div>
        </div>
        <div className="flex font-semibold justify-center gap-10 mt-8">
          <div className="">
            <Link
              href={
                "https://www.chess.com/news/view/2024-fide-world-rapid-chess-championship-day-3"
              } className="hover:brightness-75"
            >
              <img
                src="https://images.chesscomfiles.com/uploads/v1/article/31635.c6aa2672.507x286o.88e51cc7362b.png"
                alt=""
              />

              <div className="text-center mt-7">
                WGM Dina Belenkaya Beginner Intermediate Study <br />
                Guide (1000-400 Elo)
              </div>

              <div className="text-center text-[#C3C2C1] m-1 ">
                DinaBelenkaya
              </div>
            </Link>
          </div>

          <div className="">
            <Link
              href={
                "https://www.chess.com/news/view/ediz-gurel-wins-bullet-brawl-december-28-2024"
              } className="hover:brightness-75"
            >
              <img
                src="https://images.chesscomfiles.com/uploads/v1/video/9851.202e2ac5.507x286o.8bdc6c84f09d.png"
                alt=""
              />

              <div className="text-center mt-7">Rare Fourth Moves</div>

              <div className="text-center text-[#C3C2C1]  gap-3 flex justify-center m-1  ">
                <div className="text-center">
                  <h4 className="bg-pink-950 w-10">GM</h4>
                </div>
                <div className="text-center">JanistanTV</div>
              </div>
            </Link>
          </div>
        </div>


        <div className=" mx-[800px] flex  bg-[#81B64C] cursor-pointer text-center items-center
          text-2xl justify-center rounded-md p-3 shadow shadow-[#81B64C] hover:bg-[#9CCA5D] my-10 font-bold ">
        <div  className="text-center justify-center items-center">  Chess Today</div> 
          </div>

          <div className="text-center text-[#C3C2C1] justify-center  flex gap-4 mb-5">
                <div className="text-sm hover:text-white cursor-pointer"> 
                  Support 
                </div>
                <div className="text-sm hover:text-white cursor-pointer"> 
                  Chess Term 
                </div>
                <div className="text-sm hover:text-white cursor-pointer"> 
                 About
                </div>
                <div className="text-sm hover:text-white cursor-pointer"> 
                  Students
                </div>
                <div className="text-sm hover:text-white cursor-pointer"> 
                 Jobs
                </div>
                <div className="text-sm hover:text-white cursor-pointer"> 
                  Developers
                </div>
                <div className="text-sm hover:text-white cursor-pointer"> 
                  User Agreement
                </div>
                <div className="text-sm hover:text-white cursor-pointer"> 
                  Privacy  Settings
                </div>
                <div className="text-sm hover:text-white cursor-pointer"> 
                  Fair Play
                </div>
                <div className="text-sm hover:text-white cursor-pointer"> 
                  Partners
                </div>
                <div className="text-sm hover:text-white cursor-pointer"> 
                  Compliance
                </div>
                <div className="text-sm hover:text-white cursor-pointer"> 
                  Chess.com  2024
                </div>
          </div>
        
              <div className="flex gap-3 justify-center items-center m-5">
                <div className="brightness-75 hover:brightness-125">
                  <img src="https://cdn-icons-png.flaticon.com/128/179/179309.png" alt="" width={45} />
                </div>
                <div className="brightness-75 hover:brightness-125">
                  <img src="https://cdn-icons-png.flaticon.com/128/17424/17424889.png" alt="" width={60}  />
                </div>
                <hr />
                <div className="brightness-75 hover:brightness-125">
                  <img src="https://cdn-icons-png.flaticon.com/128/3046/3046121.png" alt="" width={40}  />
                </div>
                <div className="brightness-75 hover:brightness-125">
                  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968852.png" alt="" width={40}  />
                </div>
                <div className="brightness-75 hover:brightness-125">
                  <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="" width={40}  />
                </div>
                <div className="brightness-75 hover:brightness-125">
                  <img src="https://cdn-icons-png.flaticon.com/128/2111/2111727.png" alt="" width={40}  />
                </div>
                <div className="brightness-75 hover:brightness-125">
                  <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" width={40}  />
                </div>
                <div className="brightness-75 hover:brightness-125">
                  <img src="https://cdn-icons-png.flaticon.com/128/3670/3670157.png" alt="" width={40}  />
                </div>
              </div>
      </div>
    </>
  );
}
