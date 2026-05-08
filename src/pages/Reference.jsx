import React from "react";

const Home = () => {
  return (
    <div className="pt-24 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* ABOUT SECTION */}
          <header className="text-center mb-16 mt-20">
            <h2 className="text-4xl md:text-5xl mb-4 text-gradient">References</h2>
          </header>
      
          <section className="mt-20">
            <div className="glass-card p-6 md:p-10 space-y-5">
              <p className="text-text-dim">
                [1] United Nations, World Urbanization Prospects: The 2022
                Revision, UN Department of Economic and Social Affairs, 2022.
              </p>

              <p className="text-text-dim">
                [2] World Health Organization (WHO), Global Status Report on
                Road Safety 2023, WHO, 2023.
              </p>

              <p className="text-text-dim">
                [3] H. Teng et al., “The Impacts of Emergency Vehicle Signal
                Preemption on Urban Traffic Speed,” Journal of Transportation
                Research Forum, vol. 49, no. 1, 2010.
              </p>

              <p className="text-text-dim">
                [4] V.-T. Tran and W.-H. Tsai, “Acoustic-Based Emergency Vehicle
                Detection Using CNN,” IEEE Access, vol. 8, pp. 75702–75713,
                2020.
              </p>

              <p className="text-text-dim">
                [5] S. Sathruhan et al., “Emergency Vehicle Detection Using
                Vehicle Sound Classification,” SLAAI-ICAI, 2022.
              </p>

              <p className="text-text-dim">
                [6] M. Y. Shams et al., “Acoustic Data Detection in Emergency
                Vehicle Sirens,” Expert Systems with Applications, 2024.
              </p>

              <p className="text-text-dim">
                [7] S. Turner et al., “Determining Optimum Flash Patterns for
                Emergency Vehicles,” Applied Ergonomics, 2014.
              </p>

              <p className="text-text-dim">
                [8] Parliament of Sri Lanka, Motor Vehicles Rules, 2009.
              </p>

              <p className="text-text-dim">
                [9] J. D. Bullough et al., “Emergency Vehicle Warning Lighting
                System Effects,” SAE International Journal, 2025.
              </p>

              <p className="text-text-dim">
                [10] V.-T. Tran and W.-H. Tsai, “Audio-Vision Emergency Vehicle
                Detection,” IEEE Sensors Journal, 2021.
              </p>

              <p className="text-text-dim">
                [11] L. K. Wani et al., “Vehicle Crash Detection using YOLO
                Algorithm,” Int. Journal of Computer Science and Mobile
                Computing, 2022.
              </p>

              <p className="text-text-dim">
                [12] S. Waqar Khan et al., “Anomaly Detection in Traffic
                Surveillance Videos,” Sensors, 2022.
              </p>

              <p className="text-text-dim">
                [13] Mao, H., et al., “Resource Management with Deep
                Reinforcement Learning,” IEEE Journal, 2016.
              </p>

              <p className="text-text-dim">
                [14] Wei, H., et al., “PressLight: Learning Max Pressure
                Control,” KDD Conference, 2019.
              </p>

              <p className="text-text-dim">
                [15] S. N. Kumar, “Multi-Agent Reinforcement Learning in Traffic
                Signal Control,” Research Paper, 2021.
              </p>

              <p className="text-text-dim">
                [16] Zhang, Y., et al., “Intelligent Traffic Signal Control
                Using MARL,” IEEE ITS, 2022.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
