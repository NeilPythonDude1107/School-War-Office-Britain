import React, {useState} from "react";
import './timeline.css'

const Timeline = () => {

  return (
    <div>
      <div class="container" id="container">
        <ul class="timeline">
          <h1 class="heading">War Timeline</h1>
          <li onhover="onHover()">
            <div class="timeline-badge">
              <i class="glyphicon glyphicon-check"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="timeline-title">Operation Supercharge</h4>
              </div>
              <div class="timeline-body">
                <p>
                  Operation Supercharge begins: We along with our allies, the
                  United States and France defeat the axis forces twice, and
                  regain El Alamein, a key startegic way point in Egypt!
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted" onhover="onHover()">
            <div class="timeline-badge warning">
              <i class="glyphicon glyphicon-credit-card"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="timeline-title">Operation Torch</h4>
              </div>
              <div class="timeline-body">
                <p>
                  Operation torch is launched: We attack axis forces in Morocco
                  in Algeria, and the operation is mostly succesful. At this
                  point, we're as strong as the axis in Africa!
                </p>
              </div>
            </div>
          </li>
          <li onhover="onHover()">
            <div class="timeline-badge danger">
              <i class="glyphicon glyphicon-credit-card"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="timeline-title">Events In the East</h4>
              </div>
              <div class="timeline-body">
                <p>
                  Our allies, Russia and the United States have been quite busy
                  in the east, combating teh german advance on the eastern front
                  and keeping the japanese advances at bay! One very important
                  battle in the pacific was the Battle of Guadalcanal while the
                  Russians made a stand at one of their most important cities,
                  Stalingrad.
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted" onhover="onHover()">
            <div class="timeline-badge info">
              <i class="glyphicon glyphicon-floppy-disk"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="timeline-title">Battle Of Gudacanal</h4>
              </div>
              <div class="timeline-body">
                <p>
                  The Battle at Gudacanal was fought between the United States
                  and the Japanese. It was an important battle for all our
                  allies as well us. If the Japanese emerged victorious they
                  would graduallly move to capture all the Pacific. But even
                  after suffering heavy losses, the United states managed to
                  hold most of the waters at Guadacanal!
                </p>
              </div>
            </div>
          </li>
          <li onhover="onHover()">
            <div class="timeline-badge primary">
              <i class="glyphicon glyphicon-thumbs-up"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="timeline-title">Battle of Stalingrad</h4>
              </div>
              <div class="timeline-body">
                <p>
                  The Battle of Stalingrad, a turning point in Hitler's campaign
                  on the eastern front. Our Russian allies holding Stalingrad
                  had almost been defeated but an encirclement tactic by the
                  Russians trapped the Germans in the harsh, cold winter without
                  an unlimited amount of supplies. Its only a matter of time
                  before General Paulus
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted" onhover="onHover()">
            <div class="timeline-badge success">
              <i class="glyphicon glyphicon-thumbs-up"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="timeline-title">African Advances</h4>
              </div>
              <div class="timeline-body">
                <p>
                  Advances in Africa have been mostly successfull and by our
                  recent performances we expect to take back Egypt by the New
                  Year. General Montgomery has lead one of the most brilliant
                  offensives this campaign to capture back, El Alamein
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
