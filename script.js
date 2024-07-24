const jsonData = {
  "_id": { "$oid": "63b64dc9e3b230ebb60a495d" },
  "_key": "topic:2085",
  "category": "Course",
  "cid": { "$numberDouble": "NaN" },
  "commitment": "4 hours",
  "commitment_type": "custom",
  "deadline": "",
  "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto's Law. That's an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
  "faqs": [],
  "globalTags": [],
  "isActive": true,
  "lastposttime": 0,
  "learning_outcomes": [
      "Bare minimum knowledge of project management",
      "4SA Concept",
      "Would be able to handle any project efficiently"
  ],
  "mainPid": 0,
  "postcount": 0,
  "pre_requisites": [
      "An open mind to learn any concept",
      "Thought of Unlearning and Relearning "
  ],
  "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
  "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
  "slug": "2085/technical-project-management",
  "status": "published",
  "tasks": [
      {
          "task_id": 18882,
          "task_title": "Explore the world of management",
          "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
          "status": "notworkyet",
          "assets": [
              {
                  "asset_id": 18883,
                  "asset_title": "Technical Project Management",
                  "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                  "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
                  "asset_type": "display_asset",
                  "asset_content_type": "video"
              },
              {
                  "asset_id": 18884,
                  "asset_title": "Threadbuild",
                  "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                  "asset_content": " ",
                  "asset_type": "input_asset",
                  "asset_content_type": "threadbuilder"
              },
              {
                  "asset_id": 18885,
                  "asset_title": "Structure you pointers ",
                  "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                  "asset_content": " ",
                  "asset_type": "input_asset",
                  "asset_content_type": "article"
              },
              {
                  "asset_id": 18886,
                  "asset_title": "4SA Method",
                  "asset_description": "To explore more read more",
                  "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                  "asset_type": "display_asset",
                  "asset_content_type": "article"
              }
          ]
      }
  ],
  "tid": 2085,
  "timestamp": 1672891849700,
  "title": "Technical Project Management",
  "type": "project",
  "uid": 100,
  "viewcount": 0,
  "publishedAt": 1672893847792
};

// Function to create asset containers
function createAssetContainer(asset) {
  let assetHTML = `
      <div class="card">
          <div class="card-header">
              <h2>${asset.asset_title}</h2>
              <span class="info-icon">i</span>
          </div>
          <div class="card-content">
              <p>${asset.asset_description}</p>
  `;
  if (asset.asset_content_type === "video") {
      assetHTML += `
          <div class="video-container">
              <iframe src="${asset.asset_content.trim()}" frameborder="0" allowfullscreen></iframe>
          </div>`;
  } else if (asset.asset_content_type === "threadbuilder") {
      assetHTML += `
          <div class="thread-inputs">
              <div class="input-group">
                  <input type="text" placeholder="Sub thread 1">
              </div>
              <div class="input-group">
                  <input type="text" placeholder="Sub Interpretation 1">
              </div>
          </div>
          <div class="thread-actions">
              <div class="action-icons">
                  <span class="icon">💡</span>
                  <span class="icon">💬</span>
                  <span class="icon">❓</span>
                  <span class="icon">📥</span>
              </div>
              <div>
                  <select>
                      <option>Select Categ</option>
                  </select>
                  <select>
                      <option>Select Process</option>
                  </select>
              </div>
          </div>
          <button class="sub-thread-btn">+ Sub-thread</button>
          <div class="input-group">
              <textarea placeholder="Summary for Thread A"></textarea>
          </div>`;
  } else if (asset.asset_content_type === "article") {
      assetHTML += `
          <div class="input-group">
              <input type="text" placeholder="Title">
          </div>
          <div class="input-group">
              <div class="editor-toolbar">
                  File Edit View Insert Format Tools Table Help
              </div>
              <div class="editor-actions">
                  ↺ ↻ 📋 Paragraph ...
              </div>
              <textarea rows="6" placeholder="Content"></textarea>
          </div>`;
  }
  assetHTML += `
          </div>
      </div>`;
  return assetHTML;
}

// Function to render task details
function renderTaskDetails(task) {
  const taskContainer = document.getElementById('task-details');
  let taskHTML = `
      <div class="card">
          <div class="card-header">
              <h2>${task.task_title}</h2>
              <span class="info-icon">i</span>
          </div>
          <div class="card-content">
              <p>${task.task_description}</p>
          </div>
      </div>
  `;
  task.assets.forEach(asset => {
      taskHTML += createAssetContainer(asset);
  });
  taskContainer.innerHTML = taskHTML;
}

// Render the first task in the JSON data
renderTaskDetails(jsonData.tasks[0]);