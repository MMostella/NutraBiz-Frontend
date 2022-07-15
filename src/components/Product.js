import SnSNut from "../pictures/SnSNut.jpg";

import styled from "styled-components";

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .flexColumn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .product {
    margin: 2% 0;
    padding: 2%;
    width: 80%;
    border: 1px solid black;
    border-radius: 30px;
  }
  img {
    width: 90%;
  }
  .whatsInIt {
    justify-content: space-around;
    align-items: space-around;
    width: 50%;
  }
  .inItTitle {
    display: flex;
    justify-content: center;
  }
  .nutrientsContent {
    display: flex;
  }
  .nutrientsColomn {
    width: 50%;
    margin: 0 2%;
  }
  .content2 {
    width: 50%;
  }
  .expect {
    width: 50%;
  }
  .suggest {
    width: 50%;
  }
  .content1 {
    display: flex;
  }
`;

export default function Product() {
  return (
    <StyledProduct>
      <div className="product flexColumn">
        <h2>Stay N Shape</h2>
        <div className="content flexColumn">
          <p>
            Developed by a Naturopathic Doctor, this powerhouse blendhas
            createdtestimonies worldwide and now NutraBiz LLC is bringingit to
            you! Various Modalities were taken into consideration during the
            development stage of this amazing formula to have the greatest
            individual impacts. Without making any claims, NutraBiz LLC would
            like to encourage you to try this formula.
          </p>
          <div className="content1">
            <div className="whatsInIt flexColumn 50width">
              <div className="inItTitle">
                <h3>What is in it? And what does it do for me?</h3>
              </div>
              <div className="nutrientsContent">
                <div className="nutrientsColomn 50width">
                  <h5>Beta Phenylethylamlne CPEA</h5>
                  <p>
                    Has been found in the brains of humans and other mammals
                    which is facilitated by its high solubility in plasma and
                    its ability to cross the blood brain barrier. PEA has
                    stimulant effects which lead to the release of so called
                    biogenic amines, and other foods, it has an impact on the
                    levels of several "Feel Good Hormones". Some describe the
                    effects as "Feeling Happier, more alive and even having a
                    metter mood and attitude".
                  </p>
                  <h5>Caffeine</h5>
                  <p>
                    Caffeine, a xanthine alkaloid compound, is consumed widely
                    and daily by humans. It's consumption triggers arousal and
                    alertness of catecholamines, which induce beneficial effects
                    on human behavior. It contains anti-oxidants and
                    anti-inflammatory action as well. Caffeine also has shown
                    ergogenic effects attributed to fatigue delay, alertness and
                    metabolic uptake
                  </p>
                  <h5>Jet Black Cocoa Powder</h5>
                  <p>
                    Cocoa is one of the richest sources of Polyphenols known for
                    their potential health benefits including reduced
                    inflammation, better blood flow, lower blood pressure and
                    improved blood sugar levels. Cocoa intake may also help you
                    control your weight. It is thought that Cocoa may help by
                    regulating the use of energy, reducing appetite, increasing
                    fat oxidation and feelings of fullness.
                  </p>
                  <h5>Citrus Aurantium</h5>
                  <p>
                    The plant compound in Citrus Aurantium are called
                    Protoalkaloids and have been used for over 20 years in
                    supplements for weight loss, athletic performance, skin
                    care, appetite control and brain health. The benefits
                    related to physical performance are said to be derived
                    mostly from p-Synephrine, a mild stimulant in Citrus
                    Aurantiu. P-Synephrine has been shown to increase resting
                    metabolic rate and energy expenditure resulting in weight
                    loss. Combined with Caffeine, overall body performancelevels
                    have been known to increase.
                  </p>
                  <h5>Green Tea Extract</h5>
                  <p>
                    Thanks to its high anti-oxidant content, green tea extract
                    has been shown to help improve health and body composition.
                    Both Catechins and Natural Caffeine have been shown to
                    assist in weight loss by regulating the hormones that can
                    enhance thermogenesis. Thermogenesis is the process by which
                    your bodyburns caloriesto digest foods and produce heat.
                    Green Tea Extract also seems helpful in exercise, whether
                    its by improving exercise performance or enhancing recovery.
                  </p>
                </div>
                <div className="nutrientsColomn">
                  <h5>Alpha Ketoglutaric Acid (AKG)</h5>
                  <p>
                    In its natural form, it's known to enhance athletic
                    performance and metabolism. It plays a key role in the krebs
                    cycle- a series of chemical reactions used to release stored
                    energy. It can also play a key role in Gastrointestinal
                    Health, as well as, slow the breakdown of muscle tissue and
                    cellular structure. Some believe this may some day help slow
                    the aging process.
                  </p>
                  <h5>Cinnamon Bark</h5>
                  <p>
                    Cinnamon is used in Naturopathy as a way to potentially
                    lower blood sugar and blood glucose. In 2011, researchers
                    concluded that diets rich in "antioxidant spices" including
                    Cinnamon, many help reduce the body's negative response to
                    eating high fat meals. Cinnamon has also been used with
                    digestive complaints and disorders. Most notably, it is used
                    in weight loss formulas to help stabilize blood sugar.
                  </p>
                  <h5>Trace Minerals</h5>
                  <p>
                    Trace Minerals serve many purposes. Some act as antioxidants
                    protecting the body from long-term damage. They are also
                    responsible for supporting your blood stream and are
                    necessary for the healthy growth of certain hormones. Trace
                    Minerals help your body carry out its daily functions and
                    processes in the most effecient and beneficial way. Some
                    people who are mineral deficient may experience depression
                    and food cravings unneccassarily. They facilitate many
                    bio-chemical reactions including being crucial building
                    blocks for hundreds of enzymes.
                  </p>
                  <h5>Griffonia Seed</h5>
                  <p>
                    5-HTP works in the brain and central nervous system by
                    increasing the production of the chemical serotonin.
                    Serotonin can affect sleep, appetite, temperature, sexual
                    behavior and pain sensation. Studies have shown that 5-HTP
                    can reduce anxiety and panic attacks. Not only does 5-HTP
                    reduce the appetite, but studies have also shown that it
                    helps people reach for less carbs and fat.
                  </p>
                  <h5>Vanadium</h5>
                  <p>
                    Do you retain fluids? Vanadium may become your best friend.
                    In addition to stabilizing blood sugar, it has also been
                    used for improving athletic performance in weight training
                    and endurance. It is a very important trace mineral that
                    many people who are overweight lack.
                  </p>
                </div>
              </div>
            </div>
            <div className="content2 flexColumn 50width">
              <img src={SnSNut} alt="StayNShape Nutritional Facts" />
              <div className="expect flexColumn 50width">
                <h3>What to expect</h3>
                <p>
                  Within a short period of time after consuming a capsule. You
                  may notice a pick up of energy and mental focus, as well as, a
                  decrease in appetite and cravings.
                </p>
              </div>
              <div className="suggest flexColumn 50width">
                <h3>Suggested Consumption</h3>
                <p>
                  One capsule mid morning and if needed, a second capsule mid
                  afternoon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledProduct>
  );
}
