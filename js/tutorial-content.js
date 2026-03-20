window.TUTORIAL_CONTENT = {
  modules: [
    {
      id: 1,
      title: "From Idea to Reality",
      videoFile: "videos/module1.mp4",
      youtubeId: "-smQkIhWegM",
      duration: "11:37",
      description: "Learn the fundamentals of AI image creation. Create your first custom images with prompts, reference photos, and discover how to place yourself anywhere in the world.",
      sections: [
        {
          id: "m1-intro",
          title: "Introduction & Course Overview",
          timeStart: 0,
          content: `<p>Welcome to <strong>Dream Big With AI</strong>, a beginner-friendly 4-part course designed specifically for anyone with zero AI experience. Whether you've never touched an AI tool before or you're curious about what's possible, you are in the right place.</p>

<p>The goal of this entire course is beautifully simple: <strong>create one of your personal ideal moments for 2026</strong>. Now, that may sound a little New Year's resolution cliché, but you're actually going to learn some really important concepts when it comes to creating with AI. By the end of Module 4, you'll have transformed a personal vision into a professional-quality video. That's the journey ahead.</p>

<p>Here's what we'll cover across four modules:</p>
<ul>
<li><strong>Module 1:</strong> Learn to create custom images with AI prompts and reference photos</li>
<li><strong>Module 2:</strong> Master emotion and expression — bring your images to life with feeling</li>
<li><strong>Module 3:</strong> Transform static images into motion using AI video</li>
<li><strong>Module 4:</strong> Bring it all together into a complete 2026 Moment Video</li>
</ul>

<p>If you are a person who has been striving to express their creativity — even though you may not have any particular artistic talent — then AI is your dream come true. AI levels the playing field. It gives everybody an opportunity to express what's inside them, without judgment, without permission, and without worrying if you're good enough or whether you have the technical skills.</p>

<p>These four modules focus way more on results and doing things rather than theory. All of that you can learn later if you decide you want to. For now, let's just have some fun and create some stuff.</p>`
        },
        {
          id: "m1-overview",
          title: "Overview of OpenArt",
          timeStart: 166,
          content: `<p>Because this project is all about putting you in some ideal moment of 2026, we have to start with getting you into the picture. There are many places online where you can implement the concepts we're going to teach you, but today we're using the <strong>OpenArt</strong> platform (openart.ai).</p>

<p>OpenArt isn't just an image generator — as a creator, it is the perfect playground. Every tool you can possibly imagine that you would need to create your AI cinematic masterpiece is here, including:</p>

<ul>
<li><strong>Image Generation:</strong> Create custom images from text prompts</li>
<li><strong>Video Generation:</strong> Transform images into videos or generate video from text</li>
<li><strong>Story Maker:</strong> Create music videos, explainer vlogs, and tell your stories in different, more advanced ways</li>
<li><strong>Audio Tools:</strong> Voice cloning and lip-sync to match your character with specific things you're saying</li>
</ul>

<p>Because we're keeping this course super simple, we're not going to be touching those more advanced tools — but it's good to know they are there for when you're ready.</p>

<p>One important note: even though we're using OpenArt as an example here, the interface may look different by the time you try it. That's fine — as long as you understand the basic concepts of image and video creation, you'll be able to work with whatever the interface looks like.</p>

<p>This module is going to focus on the very simple process of getting you in an image and allowing you to prompt yourself in different situations. For right now, let's focus on the foundation: <strong>image generation</strong>. Master this, and everything else becomes an extension of what you already know.</p>`
        },
        {
          id: "m1-getting-started",
          title: "Getting Started With Image Creation",
          timeStart: 248,
          content: `<p>Let's create your first AI image. Open OpenArt and follow along.</p>

<p><strong>Step 1: Navigate to Image Creation</strong></p>
<p>On the OpenArt site, hover over where it says <strong>Image</strong> and then click on <strong>Create Image</strong>. You'll be presented with your previously created images (if any), and the image creation workspace where all the magic happens.</p>

<p>There are lots of settings here that we're not going to talk about right now because they're a little more advanced and not necessary for the project we're doing. What we're concerned with is getting your picture in there and then telling AI what we want to do with that picture.</p>

<p><strong>Step 2: Understand AI Models</strong></p>
<p>When we say we're telling AI what to do with the picture, we're actually talking to what's called a <strong>model</strong>. If you click under <strong>Model</strong> (or <strong>Character</strong>), you'll see there are a lot of models to choose from, each with different specialties — maybe a particular look, or special superpowers.</p>

<p>There's a whole newer generation of AI models that don't make you rely just on prompting. You can actually use what are called <strong>reference images</strong> to tell the model exactly how you want the image to look. In this case, we're going to put pictures of ourselves in there so it knows to use our likeness in the image. The number of models that have this feature is growing all the time.</p>

<p>For this demo, we're using <strong>Seedream 4.5</strong> because it does the best job at keeping your face consistent in all of your images — and that's really important if you're going to believe, or ask anyone else to believe, that these images are real.</p>

<p><strong>Step 3: Upload a Reference Image</strong></p>
<p>Here's where we're going to drag up to <strong>14 images</strong> for reference. For now, we just need one good image of ourselves — forward-facing, with our face looking how we want it to look in all of the images we're going to create.</p>

<p>To upload, just click in the reference area and select a file, or simply <strong>drag an image from your computer and drop it right on the box</strong>. That's all you need to do.</p>`
        },
        {
          id: "m1-prompting",
          title: "Basic Prompting & Aspect Ratio",
          timeStart: 388,
          content: `<p>Now for the magic part: <strong>the prompt</strong>. All we need to tell the model is who is it, where are they, and what are they doing.</p>

<ul>
<li><strong>WHO:</strong> Who is in the image?</li>
<li><strong>WHERE:</strong> Where are they?</li>
<li><strong>WHAT:</strong> What are they doing?</li>
</ul>

<p>Here's an example: <em>"The man is outside a nightclub sitting on a blue and purple sports car."</em></p>

<p>Notice how simple that is — who he is, where he is, and what he's doing. We didn't specify a car make or model; just "blue and purple sports car" was enough to get stunning results. You can be as specific or as vague as you want.</p>

<p><strong>Output Settings</strong></p>
<p>If you scroll down, you'll see the output settings:</p>
<ul>
<li><strong>Aspect Ratio:</strong> For full-screen video, choose <strong>Widescreen</strong>. Square works for social media.</li>
<li><strong>Number of Images:</strong> Set to <strong>4</strong> so you get multiple variations to choose from.</li>
<li><strong>Resolution:</strong> Leave it at <strong>2K</strong> — that's a good default for quality without huge file sizes.</li>
</ul>

<p><strong>Generate!</strong></p>
<p>Click <strong>Create</strong>. On OpenArt, it's pretty fast — just a few seconds. You'll see your results appear with your face, your expression, and the scene you described.</p>

<p><strong>Iterating on Your Prompt</strong></p>
<p>Once you see the first results, you can easily refine. For example, you could add <em>"wearing a blue and purple tuxedo"</em> to the prompt and click Create again. Now you'll get four completely new images — different positions from the first set, but the same idea — and the model still maintains your facial likeness perfectly from image to image.</p>`
        },
        {
          id: "m1-reference",
          title: "Using Reference Images Effectively",
          timeStart: 356,
          content: `<p>Reference images are one of the most powerful features in OpenArt. Now that we have an image uploaded as a reference, the AI model knows what we look like and will incorporate our likeness into every image we generate.</p>

<p><strong>Building a Reference Image Library</strong></p>
<p>A great tip from the video: keep a directory of headshots that you commonly use. In the demo, Bob shows that he maintains a collection with photos of his wife Tracy, his assistant Presley, a few different versions of himself, their daughter Amber — and even a picture of himself from sixth grade. Think of the possibilities!</p>

<p><strong>Why Different References Matter</strong></p>
<p>Different reference photos give you completely different looks. You might have different makeup styles you like, or maybe sometimes you wear a beard and sometimes you don't. Just choose the appropriate reference image and all of your generated images will match that look. You can always add emotions in the prompt itself — we'll cover that in Module 2.</p>

<p><strong>Optimal Reference Photos</strong></p>
<p>The best reference images have these qualities:</p>
<ul>
<li><strong>Forward-facing:</strong> Your face looking at the camera gives the model the clearest data</li>
<li><strong>Good lighting:</strong> Make sure your face is clearly visible</li>
<li><strong>How you want to look:</strong> The expression and styling in your reference will carry through to your generated images</li>
</ul>

<p>Remember: you can upload up to 14 reference images (we'll explain why you'd want more in Module 2). For now, just one good photo is all you need.</p>`
        },
        {
          id: "m1-nano-banana",
          title: "Testing Different Models: Seedream vs. Nano Banana Pro",
          timeStart: 490,
          content: `<p>So far we've been using exclusively the <strong>Seedream 4.5</strong> image model because it's the personal favorite in this course and does the best job on consistency. But there are other great models out there that do similar things. One such model you may have heard about is called <strong>Nano Banana Pro</strong>.</p>

<p><strong>How to Test a Different Model</strong></p>
<p>We can test very easily: just click any of the images you want to run with a different model. From there, click <strong>"Reuse Settings"</strong> — that's going to load the original prompt, the original reference image, and the original model. Now switch the model to <strong>Nano Banana Pro</strong>, make sure your widescreen and number of images are set, and click Create.</p>

<p><strong>Comparing Results</strong></p>
<p>With Nano Banana Pro, you'll get an entirely different artistic imagining — a different tuxedo, a different car. But you might notice the face is more stylized than realistic. Some of the output may be distorted, and it just doesn't consistently give the face you want. As Bob puts it: "This looks more like a relative of mine than it does of me."</p>

<p>And that's why the course uses Seedream 4.5 — but <strong>you can choose whatever you'd like</strong>. Try all the models and see which results appeal to your sensibilities the most. There's no single "best" model — only the best model for <em>your</em> vision and <em>your</em> face.</p>`
        },
        {
          id: "m1-locations",
          title: "Changing Locations & Camera Instructions",
          timeStart: 551,
          content: `<p>Let's change our locations and do something else. Here's how easy it is to put yourself wherever, doing whatever.</p>

<p><strong>Example 1: On Stage with a Band</strong></p>
<p>New prompt: <em>"The man is on stage with a five-piece band playing the ukulele as the front man."</em> Leaving all the other settings the same and clicking Create — and just like that, you've got a band. Your face, including the facial expression, stays the same in every single one. (We'll deal with facial expression and emotion in Module 2.)</p>

<p><strong>Example 2: Camera Instructions</strong></p>
<p>Most models give you the ability to add basic camera instructions like close-ups, wide shots, and medium shots. So let's add a little more detail to the prompt this time:</p>

<p><em>"Close-up of the man in the snowy woods sipping hot cocoa while sitting on the back deck of a log cabin wearing a cozy parka."</em></p>

<p>In just a few seconds, you've got four images of yourself enjoying hot cocoa on a snowy cabin deck. This is the kind of moment you might like to see for yourself in 2026.</p>

<p><strong>Changing Camera Angle with One Word</strong></p>
<p>Now try changing just <em>"close-up"</em> to <em>"wide shot"</em> in the same prompt. The camera pulls back, giving a better view of the surroundings — all while still adhering to the prompt instruction of you sipping hot cocoa on the back deck wearing a parka. One word changed, completely different composition.</p>

<p>There is no complicated rocket science, no technical prompt magic you need to know. You just need to be able to say: I want this person, doing that thing, over there.</p>`
        },
        {
          id: "m1-homework",
          title: "Module 1 Homework: Your First Images",
          timeStart: 614,
          content: `<p>That simple process is all we want you to do for your first round of homework. Super simple.</p>

<p><strong>Your Assignment:</strong></p>
<p>Just use OpenArt where you can access a model like Seedream, drag in a reference image, give it a prompt, and before you go on to Module 2, <strong>generate at least three different images of yourself in different places and locations</strong> that are interesting to you.</p>

<p><strong>Experiment freely:</strong></p>
<ul>
<li>Don't be afraid to play around with prompts and try different things</li>
<li>Try different clothing, different lighting — try it all</li>
<li><strong>You can't break it.</strong> You can either be happy with the results or you're not</li>
<li>After a while, you'll find the prompts that stretch the limits and the ones that really work well</li>
</ul>

<p><strong>Play with Reference Images Too:</strong></p>
<p>Don't be afraid to try different reference images. You can give yourself completely different looks by just using different photos. You might have different makeup styles you like, or maybe sometimes you wear a beard and sometimes you don't. Just choose the appropriate reference image and then all of your images will look exactly how you want them to look.</p>

<p><strong>What's Next?</strong></p>
<p>In the next module, we're going to work on adding layers of <strong>emotional expression</strong> and personalizing these images and future videos even more by using additional reference images and bringing in <strong>items and people and locations from your real life</strong>. Until then, have fun creating!</p>`
        }
      ]
    },
    {
      id: 2,
      title: "Transform With Emotion & Expression",
      videoFile: "videos/module2.mp4",
      youtubeId: "KX4hiMLHiok",
      duration: "9:13",
      description: "Bring your images to life by adding emotion and expression. Learn to use reference images strategically, create emotional transformations, and build the foundation for visual storytelling.",
      sections: [
        {
          id: "m2-intro",
          title: "Introduction & Welcome Back",
          timeStart: 0,
          content: `<p>Welcome back to <strong>Module 2: Transform With Emotion & Expression</strong>.</p>

<p>If you completed your Module 1 homework, you should now have several AI-generated images of yourself in different locations and scenarios. Congratulations — you've just created custom visual content that would have cost thousands of dollars to produce a few years ago.</p>

<p>But here's the truth: images alone are just that — images. What makes images powerful is <strong>feeling</strong>. What makes a portrait memorable is the expression in someone's eyes. What makes a scene impactful is the emotion captured in a moment.</p>

<p>In this module, we're going to transform your images from nice-looking to <strong>emotionally compelling</strong>. We'll learn techniques to add depth, feeling, and humanity to your AI creations. By the end of Module 2, you'll have created an emotional arc — a before-and-after story told through expression and feeling.</p>`
        },
        {
          id: "m2-homework-review",
          title: "Homework Check-In & Setting Expectations",
          timeStart: 56,
          content: `<p>Before we move forward, let's do a quick check-in on the homework from Module 1.</p>

<p><strong>Did you complete it?</strong> Great! You should have:</p>
<ul>
<li>At least one reference image of yourself uploaded to OpenArt</li>
<li>Multiple prompts following the WHO/WHERE/WHAT structure</li>
<li>At least 3 generated images of yourself in different scenarios</li>
<li>A sense of how the tools work and how to iterate</li>
</ul>

<p><strong>If you're still working on it:</strong> That's okay. There's no rush. Come back to Module 2 once you've created those first images. The homework isn't busywork — it's essential foundational experience.</p>

<p><strong>What We're Building Now</strong></p>
<p>With your images in hand, Module 2 is about <strong>adding emotional dimension</strong>. We're moving from "Here I am in a cool place" to "Here I am feeling something real." That's the shift that transforms your images from impressive to unforgettable.</p>

<p><a href="#" class="video-link" data-module="2" data-time="56">▶ Watch Homework Check-In (0:56)</a></p>`
        },
        {
          id: "m2-emotion-expression",
          title: "The Power of Emotion & Expression",
          timeStart: 104,
          content: `<p>Let's talk about why emotion matters so much in visual storytelling.</p>

<p><strong>The Problem With AI Images</strong></p>
<p>Here's something you've probably noticed: AI-generated images can look technically perfect but emotionally flat. The person in the image might be smiling, but it doesn't feel genuine. Their eyes don't sparkle. Their posture doesn't convey confidence or vulnerability or joy.</p>

<p>This happens because <strong>emotion is the hardest thing for AI to capture without guidance</strong>. You have to tell it what you want to feel.</p>

<p><strong>The Solution: Emotion Words in Your Prompt</strong></p>
<p>When you add emotion and expression words to your prompts, you're giving the AI a template for how to render your face, your posture, your entire presence.</p>

<p>Instead of: <em>"A close-up of the man in a photo studio"</em></p>
<p>Try: <em>"A close-up of the man in a photo studio with a pensive expression"</em></p>

<p>That one word — <strong>pensive</strong> — changes everything. Now the AI knows: you're looking thoughtful, maybe a bit vulnerable. Your eyes have a different quality. Your expression reads as introspective.</p>

<p><strong>Why This Matters for Your 2026 Moment</strong></p>
<p>By the end of this course, you'll have created a video showing your journey. That video will be far more powerful if it shows emotional progression. Not just "you in different places" but "you experiencing different feelings." That's what transforms a cool video into a meaningful one.</p>

<p><a href="#" class="video-link" data-module="2" data-time="104">▶ Watch Emotion & Expression (1:44)</a></p>`
        },
        {
          id: "m2-expression-prompts",
          title: "Creating Variations With Emotion Words",
          timeStart: 164,
          content: `<p>Let's get practical. Here's how to create emotional variations of the same image. We're going to start with a simple portrait and then change just the emotion word in the prompt.</p>

<p><strong>Start With a Base Prompt</strong></p>
<p>Use a simple base prompt like: <em>"Close-up man posing for a portrait in a photo studio with a pensive expression."</em> Generate 4 images and pick your favorite.</p>

<p><strong>Now Swap the Emotion Word</strong></p>
<p>Keep everything else identical. Just change the emotion descriptor. Try these variations:</p>

<ul>
<li><strong>Pensive version:</strong> "Close-up man posing for portrait in photo studio with a <strong>pensive</strong> expression" (thoughtful, looking off into the distance)</li>
<li><strong>Confident version:</strong> "Close-up man posing for portrait in photo studio with a <strong>confident</strong> expression" (assured, but not overly toothy)</li>
<li><strong>Worried version:</strong> "Close-up man posing for portrait in photo studio with a <strong>worried</strong> expression" (showing realistic signs of concern)</li>
<li><strong>Laughing version:</strong> "Close-up man posing for portrait in photo studio with a <strong>laughing</strong> expression" (genuinely joyful)</li>
<li><strong>Crying version:</strong> "Close-up man posing for portrait in photo studio with a <strong>crying</strong> expression" (emotional, with actual tears)</li>
</ul>

<p><strong>What You'll Observe</strong></p>
<p>Generate each of these. Look closely at the results. You'll see how subtle emotion words create realistic, nuanced expressions:</p>
<ul>
<li>Eye focus and gaze direction shifts with emotion</li>
<li>Mouth position completely changes the feeling</li>
<li>Eyebrow position reflects the specific emotion</li>
<li>Overall face conveys authentic feeling, not cartoonish exaggeration</li>
</ul>

<p>This is the foundation of emotional storytelling. By chaining emotions together, you create a visual narrative arc that viewers can feel.</p>

<p><a href="#" class="video-link" data-module="2" data-time="164">▶ Watch Expression Prompts (2:40)</a></p>`
        },
        {
          id: "m2-editing-existing",
          title: "Editing Existing Images as References",
          timeStart: 294,
          content: `<p>Here's a powerful technique: using your generated images as reference images for new generations. This is how you create emotional transformations with the exact same composition and positioning.</p>

<p><strong>The Workflow</strong></p>

<p><strong>Step 1: Pick an Image to Edit</strong></p>
<p>Take a generated image you love — a portrait of you with a neutral or one specific expression. This will be your reference for the next generation.</p>

<p><strong>Step 2: Upload It as a Reference Image</strong></p>
<p>In a new Create Image session, drag this image into the reference area. OpenArt now sees this generated image as your template for composition, positioning, and framing.</p>

<p><strong>Step 3: Give It New Emotional Instructions</strong></p>
<p>Write a prompt that tells the AI exactly what to change — the emotion — while keeping everything else identical:</p>

<p><em>"He is sad and looking off into the distance. Keeping the position of the man the same, his face is now sad and looking off into the distance."</em></p>

<p>This explicit instruction — "Keeping the position the same" — is key. It tells the AI: "I love the framing and composition of this reference image. Just change the expression and emotion."</p>

<p><strong>Step 4: Generate and Compare</strong></p>
<p>Now you have two images:</p>
<ul>
<li><strong>Image A:</strong> Original expression, original composition</li>
<li><strong>Image B:</strong> New emotion (sad), identical composition and framing</li>
</ul>

<p>This is your <strong>before-and-after emotional transformation</strong>. Same person, same position, different feeling. When you animate these as a video later, it will be powerful.</p>

<p><a href="#" class="video-link" data-module="2" data-time="294">▶ Watch Editing Existing Images (4:54)</a></p>`
        },
        {
          id: "m2-multiple-references",
          title: "Using Multiple Reference Images (Omni Reference)",
          timeStart: 385,
          content: `<p>OpenArt has a powerful feature called <strong>Omni Reference</strong> that lets you blend elements from multiple reference images into one creation. This opens up amazing possibilities for personalization.</p>

<p><strong>Why Multiple References?</strong></p>
<p>Imagine you want to create an image of yourself holding a very specific instrument, sitting on a car, in a particular style. You might have:</p>
<ul>
<li>A reference photo of yourself (for facial consistency)</li>
<li>A reference image of the car you want (for exact details and style)</li>
<li>A reference image of the instrument you want to hold (the exact one, not an AI interpretation of it)</li>
</ul>

<p>Without multiple references, you're trusting the AI to imagine all three elements correctly. With Omni Reference, you're showing the AI exactly what you want, and it incorporates all of those elements into one image.</p>

<p><strong>How to Use It</strong></p>

<p><strong>Step 1: Add Multiple Reference Images</strong></p>
<p>In the reference section, drag in 2-3 images. OpenArt will label them as "Image 1," "Image 2," "Image 3," etc.</p>

<p><strong>Step 2: Reference Them Explicitly in Your Prompt</strong></p>
<p>In your prompt, call out exactly which reference image you want the AI to use for which element:</p>

<p><em>"The man sitting on the car is holding the instrument in image 2 with pride and joy."</em></p>

<p>The AI now understands precisely: incorporate the instrument details from image 2, place the man on the car, and render his expression with pride and joy.</p>

<p><strong>Example: Creating Emotional Variations**</strong></p>
<p>Generate that once: <em>"The man sitting on the car is holding the instrument in image 2 with pride and joy."</em></p>

<p>Pick your favorite. Now use all the same references again but change only the emotion:</p>

<p><em>"The man sitting on the car is holding the instrument in image 2 with terrible disappointment."</em></p>

<p>Same setup. Same instrument. Completely different emotional tone and facial expression. This is how you build narrative tension and transformation in still images — perfect for the before-and-after sequences you'll animate in Module 3.</p>

<p><a href="#" class="video-link" data-module="2" data-time="385">▶ Watch Multiple References (6:25)</a></p>`
        },
        {
          id: "m2-homework",
          title: "Module 2 Homework: Create Your Emotional Arc",
          timeStart: 460,
          content: `<p>Module 2 homework is about creating depth and progression. You're building the emotional foundation for your 2026 Moment story.</p>

<p><strong>Assignment: Before & After Emotional Transformation</strong></p>

<p>Your task is to create <strong>two images that tell a story of emotional progression</strong>:</p>

<ul>
<li><strong>The "Before" Image:</strong> You waiting, anticipating, or uncertain about something. Emotions to try: hopeful, nervous, excited, anxious, contemplative</li>
<li><strong>The "After" Image:</strong> You reacting to receiving or achieving something. Emotions to try: joyful, relieved, proud, surprised, grateful</li>
</ul>

<p><strong>How to Create This**</strong></p>

<p><strong>Step 1: Create Your "Before" Image</strong></p>
<p>Write a prompt that describes a moment of anticipation or waiting:</p>
<p><em>"The man is waiting outside a theater with an anticipatory and hopeful expression, checking his watch"</em></p>

<p>Generate 4 images. Pick your favorite.</p>

<p><strong>Step 2: Use It as a Reference**</strong></p>
<p>Upload that generated image as a reference. Now create the "After" version with the same composition but a different emotion and outcome:</p>
<p><em>"The man is standing in the same position but now joyful and grateful, having just received good news. Keep the position the same"</em></p>

<p>Generate. Compare the two side-by-side.</p>

<p><strong>What You're Learning</strong></p>
<p>By doing this, you're learning:</p>
<ul>
<li>How to layer emotions into prompts</li>
<li>How to maintain composition while shifting feeling</li>
<li>How to tell a story in two images</li>
<li>The power of before-and-after emotional progression</li>
</ul>

<p><strong>Bonus Challenge</strong></p>
<p>Try using Omni Reference to incorporate multiple elements (a person, an object, a location) from different reference images. This advanced technique will become useful in Module 4.</p>

<p><strong>What's Next?</strong></p>
<p>You now have static images. In Module 3, we're going to bring them to life with motion. Those emotional images? We're going to animate them. Get ready.</p>

<p><a href="#" class="video-link" data-module="2" data-time="460">▶ Watch Homework (7:40)</a></p>`
        }
      ]
    },
    {
      id: 3,
      title: "From Image to Motion With AI Video",
      videoFile: "videos/module3.mp4",
      youtubeId: "IQ1D5nF9m4o",
      duration: "15:36",
      description: "Learn to transform static images into dynamic videos using AI. Discover start/end frames, interpolation, and how to create smooth emotional transitions that bring your 2026 Moment to life.",
      sections: [
        {
          id: "m3-intro",
          title: "Introduction & Quick Recap",
          timeStart: 0,
          content: `<p>Welcome to <strong>Module 3: From Image to Motion With AI Video</strong>. This is where the magic really starts.</p>

<p>Let's recap where you are:</p>

<ul>
<li><strong>Module 1:</strong> You created custom images of yourself in different locations and scenarios using prompts and reference photos.</li>
<li><strong>Module 2:</strong> You infused those images with emotion. You created before-and-after emotional transformations showing how your face and expression change.</li>
</ul>

<p>Now comes the thrilling part: <strong>bringing those images to life</strong>. Those static emotional images you created? We're going to animate them. We're going to create smooth, continuous transitions that make your 2026 Moment feel real, dynamic, and truly cinematic.</p>

<p>By the end of this module, you'll have videos showing your emotional journey. Not just a collection of pictures, but a real, moving story. Let's dive in.</p>

<p><a href="#" class="video-link" data-module="3" data-time="0">▶ Watch Intro (0:00)</a></p>`
        },
        {
          id: "m3-start-end-frames",
          title: "Understanding Start & End Frames",
          timeStart: 140,
          content: `<p>The foundation of AI video creation is understanding the concept of <strong>start and end frames</strong>.</p>

<p><strong>What Are Start and End Frames?</strong></p>
<p>Think of it like this:</p>

<ul>
<li><strong>Start Frame:</strong> The first image. Your video begins here.</li>
<li><strong>End Frame:</strong> The final image. Your video ends here.</li>
<li><strong>The Magic:</strong> The AI creates all the frames in between, animating a smooth transition from start to end.</li>
</ul>

<p>This is called <strong>interpolation</strong>. The AI watches your start and end images and figures out how to animate from one to the other in a natural, cinematic way.</p>

<p><strong>Why This Matters for Your Story</strong></p>
<p>Remember those emotional transformation images you created in Module 2? The "before" version (waiting, hopeful) and the "after" version (joyful, relieved)? Those are perfect start and end frames.</p>

<p>By using them as start and end frames in a video, you create a visual journey that shows emotional progression over time. It's no longer a still image — it's a moment unfolding.</p>

<p><strong>Visual Preview**</strong></p>
<p>Before you generate, OpenArt shows you a preview of your start and end frames side-by-side. This helps you confirm you're making the transition you want.</p>

<p><a href="#" class="video-link" data-module="3" data-time="140">▶ Watch Start & End Frames (2:20)</a></p>`
        },
        {
          id: "m3-getting-started-video",
          title: "Getting Started With Image to Video",
          timeStart: 195,
          content: `<p>Let's create your first video using the Image to Video tool with start and end frames.</p>

<p><strong>Step 1: Navigate to Video Tools</strong></p>
<p>In OpenArt, click <strong>Video > Image to Video</strong>. You'll land in the video creation workspace.</p>

<p><strong>Step 2: Explore Your Options**</strong></p>
<p>You'll see several video generation methods:</p>

<ul>
<li><strong>Text to Video:</strong> Generate video from a text prompt alone (we'll cover this in Module 4)</li>
<li><strong>Image to Video:</strong> This is what we're using — start and end frame animation</li>
<li><strong>Elements to Video & Video to Video:</strong> More advanced options we'll skip for now</li>
</ul>

<p><strong>Step 3: Upload Your Start Frame**</strong></p>
<p>This is the emotional "before" image from Module 2. Drag and drop it into the start frame section, or click to upload from your history.</p>

<p><strong>Step 4: Upload Your End Frame**</strong></p>
<p>This is the emotional "after" image. OpenArt now has both your beginning and ending point, and it will animate everything in between.</p>

<p><strong>Step 5: Choose Your Video Model**</strong></p>
<p>You'll see options for different video models that support start and end frames (look for models labeled with "end frame"). For your first video, <strong>Seedance 1.5 Pro</strong> is an excellent choice.</p>

<p><strong>Step 6: Set Duration**</strong></p>
<p>How long should the video be? Start with 5-10 seconds. This gives the AI time to smoothly animate from start to end without feeling rushed.</p>

<p><strong>Step 7: Generate**</strong></p>
<p>Hit Create. The AI will process for a minute or two, then you'll see a smooth video transitioning from your start frame to your end frame.</p>

<p><a href="#" class="video-link" data-module="3" data-time="195">▶ Watch Getting Started (3:15)</a></p>`
        },
        {
          id: "m3-video-models",
          title: "Exploring Different Video Models",
          timeStart: 310,
          content: `<p>Just like with image generation, there are multiple AI video models available, each with different strengths, capabilities, and visual styles.</p>

<p><strong>Why Different Models?**</strong></p>
<p>Different models were trained on different data and with different objectives. Some excel at cinematic quality. Others at smooth motion. By testing multiple models with the same start and end frames, you can see which one best matches your creative vision.</p>

<p><strong>Seedance 1.5 Pro</strong></p>
<p>A powerful model that:</p>

<ul>
<li>Supports audio natively (generates sound along with video)</li>
<li>Renders at 720p (and up to 1080p in some cases)</li>
<li>Gives you lots of control and options</li>
<li>Creates smooth, intuitive transitions</li>
<li>Allows durations up to 12 seconds</li>
</ul>

<p><strong>Kling 2.6 and Kling 2.5</strong></p>
<p>Excellent alternatives with:</p>

<ul>
<li>Different visual aesthetics and motion characteristics</li>
<li>Strong handling of emotional expressions and character movement</li>
<li>Kling 2.6 is the newer version with enhanced capabilities</li>
<li>Kling 2.5 still does great work (doesn't generate native audio, but handles video well)</li>
</ul>

<p><strong>Veo 3</strong></p>
<p>The newest model that brings:</p>

<ul>
<li>Native audio generation (creates music and sound design automatically)</li>
<li>Cinematic quality video</li>
<li>Advanced emotional scene handling</li>
<li>Smooth frame-to-frame interpolation</li>
</ul>

<p><strong>How to Compare Models</strong></p>
<p>Here's the test: Create a video with your start and end frames using Seedance 1.5 Pro. Watch it. Then go back to the same images and generate with Kling 2.6. Notice how different the transitions feel, how the motion differs, even though the start and end points are identical. This is just AI — different models, different creative choices.</p>

<p><strong>Which One to Use?</strong></p>
<p>All of them are good. The choice comes down to:</p>

<ul>
<li>Which visual style appeals to you</li>
<li>Which model's motion feels more natural to you</li>
<li>Whether you want native audio (Seedance and Veo do, Kling 2.5 doesn't)</li>
<li>Which one consistently works best with your specific images</li>
</ul>

<p>The best way to learn: pick one, generate, watch the result, then try another with the same frames and compare. You'll quickly develop a feel for which model works best for your creative vision.</p>

<p><a href="#" class="video-link" data-module="3" data-time="310">▶ Watch Video Models (5:10)</a></p>`
        },
        {
          id: "m3-support-prompts",
          title: "Using Support Prompts to Guide Animation",
          timeStart: 538,
          content: `<p>Here's where AI video gets even more powerful: <strong>support prompts</strong> (also called guidance prompts).</p>

<p><strong>What Are Support Prompts?</strong></p>
<p>A support prompt is descriptive text that tells the AI exactly what should happen during the transition between your start and end frames. It's your creative direction for how the animation should unfold.</p>

<p>Without a support prompt, the AI tries to figure out the motion on its own — sometimes it makes creative choices you didn't intend (like unexpected camera movements). With a support prompt, you guide it toward your vision.</p>

<p><strong>Example: Telling a Story With Motion</strong></p>
<p>Start frame: You looking nervous and anxious on an empty stage.</p>
<p>End frame: You confident and playing, with a band behind you.</p>

<p>Your support prompt: <em>"The worried man is joined by his bandmates who walk onto the stage and they begin to play."</em></p>

<p>Notice what you've done:</p>

<ul>
<li>You've described <strong>what happens</strong> during the video (bandmates arrive)</li>
<li>You've guided the <strong>visual progression</strong> (from alone and anxious to part of something larger and confident)</li>
<li>You've provided <strong>narrative logic</strong> (this isn't random animation; it's a scene with a clear story)</li>
</ul>

<p><strong>How to Write Support Prompts</strong></p>

<p><strong>Control Camera Movement:</strong> "Camera holds steady on man as he changes his facial expression" (keeps focus on emotion, not distracting camera work)</p>
<p><strong>Describe What Enters the Scene:</strong> "Bandmates walk onto the stage"</p>
<p><strong>Add Emotional Progression:</strong> "The man relaxes and gains confidence as the band joins"</p>
<p><strong>Reference Timing:</strong> "The transition happens smoothly over the duration of the shot"</p>

<p><strong>Important:** Your support prompt should connect your start and end frames logically. If start frame = nervous on empty stage, and end frame = confident with band, your prompt should explain that progression.</p>

<p><strong>Testing Different Support Prompts</strong></p>
<p>Keep your start and end frames identical. Change only the support prompt. Generate again. You'll see how the same two images can be connected in completely different ways depending on what story you tell.</p>

<p><a href="#" class="video-link" data-module="3" data-time="538">▶ Watch Support Prompts (8:58)</a></p>`
        },
        {
          id: "m3-radical-transitions",
          title: "Scene Transitions: Pushing the Boundaries",
          timeStart: 788,
          content: `<p>Now here's where things get really fun: <strong>you can create transitions between radically different images</strong>. Images that have nothing to do with each other logically, but tell a powerful visual story.</p>

<p><strong>Breaking the Rules of Physics**</strong></p>
<p>In traditional filmmaking, you need strict continuity. You can't jump from a character indoors to the same character on Mars without an explanation or cut.</p>

<p>With AI video, you can do this. And it creates something magical.</p>

<p><strong>Example: Extreme Transition**</strong></p>
<p>Start frame: You sitting on a car, drinking coffee in a snowy cabin setting.</p>
<p>End frame: You sitting on a car on a desert highway at night.</p>

<p>These images are completely different locations, completely different lighting, completely different contexts. But the "you" element is consistent across both. The AI is smart enough to animate a smooth transition between them, focusing on what's the same (you) and smoothly morphing what's different (the entire environment).</p>

<p><strong>Why This Works**</strong></p>
<p>The AI recognizes the constant element (you, your positioning) and animates the transformation of everything else. The result feels surreal, dreamlike, almost metaphorical. Perfect for conveying a 2026 vision that's aspirational and transformative.</p>

<p><strong>Support Prompts Become Key**</strong></p>
<p>When you're doing radical transitions like this, support prompts help you guide the transition:</p>

<p><em>"The man of the cabin puts down his coffee, the parrot flies away. He stands up and the camera tracks him as he walks and takes off his coat. He walks seamlessly with no cuts to his purple car parked on a city street and sits on the hood."</em></p>

<p>Or embrace the surreal: <em>"Don't worry about rules of physics. Have fun and play."</em></p>

<p><strong>Creative Freedom**</strong></p>
<p>You're not bound by reality. Your 2026 Moment can include impossible transitions, dreamlike sequences, and visual metaphors. That's the beauty of AI cinematography. Tell the story you want to tell, not the one physics allows.</p>

<p><a href="#" class="video-link" data-module="3" data-time="788">▶ Watch Scene Transitions (13:08)</a></p>`
        },
        {
          id: "m3-homework",
          title: "Module 3 Homework: Create Your First Videos",
          timeStart: 728,
          content: `<p><strong>Module 3 Homework: Animate Your Emotional Arc**</strong></p>

<p>You have emotional transformation images from Module 2. Now it's time to bring them to life with video.</p>

<p><strong>Assignment: Create 2-3 Short Videos**</strong></p>

<p><strong>Video 1: Your Emotional Before/After**</strong></p>
<p>Use your Module 2 before-and-after images as start and end frames:</p>

<ul>
<li>Start Frame: Your "before" emotional image (anticipatory, nervous, hopeful)</li>
<li>End Frame: Your "after" emotional image (joyful, relieved, victorious)</li>
<li>Model: Seedance 1.5 Pro (great for smooth transitions and optional native audio)</li>
<li>Duration: 9-10 seconds</li>
<li>Support Prompt (optional but recommended): Write a sentence or two describing what happens during the transition. What's the story arc? What emotional journey are we watching?</li>
</ul>

<p>Generate and watch the result. This is your first motion-based storytelling. Notice how the emotion shifts in real time.</p>

<p><strong>Video 2: Test Different Models**</strong></p>
<p>Take the exact same start and end frames and support prompt, but generate it again using a different model — try Kling 2.6 or Veo 3. Compare the two videos side-by-side. Which one feels better to you? Which one has motion that resonates more? Notice how different models create different transitions.</p>

<p><strong>Video 3 (Optional): Experiment & Play**</strong></p>
<p>If you're feeling adventurous, create a video using two very different images (different locations, completely different scenarios) and a creative support prompt that explains the transition. See how the AI handles the "impossible" jump between moments. Don't worry about rules of physics — have fun with it.</p>

<p><strong>What You're Learning**</strong></p>

<ul>
<li>How start and end frames create smooth animation</li>
<li>How support prompts guide the story the AI tells</li>
<li>How different models produce different visual and motion results</li>
<li>The power of emotional arcs in motion</li>
</ul>

<p><strong>Pro Tip:** Save your best videos in a folder. You'll need them for Module 4, where we're bringing everything together into your complete 2026 Moment Video.</p>

<p><strong>What's Next?**</strong></p>
<p>In Module 4, you're going to assemble all these individual videos and images into a complete, professional narrative. You'll add music, arrange your clips on a timeline, and export your final 2026 Moment Video. We're almost there.</p>

<p><a href="#" class="video-link" data-module="3" data-time="728">▶ Watch Homework (12:08)</a></p>`
        }
      ]
    },
    {
      id: 4,
      title: "Bringing It All Together",
      videoFile: "videos/module4.mp4",
      youtubeId: "jonRSZO7-14",
      duration: "17:34",
      description: "Assemble your 2026 Moment Video using all techniques from Modules 1-3. Learn timeline editing, sequencing, music integration, and final export to create a professional-quality narrative video.",
      sections: [
        {
          id: "m4-intro",
          title: "Introduction & Full Recap",
          timeStart: 0,
          content: `<p>Welcome to <strong>Module 4: Bringing It All Together</strong>.</p>

<p>This is the culmination of everything you've learned. Let's recap the journey:</p>

<ul>
<li><strong>Module 1:</strong> You learned to create custom images of yourself in different locations using prompts and reference photos.</li>
<li><strong>Module 2:</strong> You infused those images with emotion, creating before-and-after transformations that show feeling and expression.</li>
<li><strong>Module 3:</strong> You brought those images to life as videos, creating smooth animated transitions that tell a story.</li>
</ul>

<p>Now, in Module 4, you're going to weave all of these elements together into a <strong>complete narrative: your 2026 Moment Video</strong>.</p>

<p>This isn't just a collection of clips. This is a produced, edited, polished video that tells the story of your vision for 2026. It has a beginning, middle, and end. It has emotion, motion, and music. It's something you can be proud of and share with the world.</p>

<p>Let's build it.</p>

<p><a href="#" class="video-link" data-module="4" data-time="0">▶ Watch Intro (0:00)</a></p>`
        },
        {
          id: "m4-image-to-video",
          title: "Working With Image to Video at Scale",
          timeStart: 107,
          content: `<p>By now, you've created some videos using image-to-video. In Module 4, you're going to do this at scale — creating multiple video clips that will form the sequences of your story.</p>

<p><strong>Batch Creating Multiple Videos**</strong></p>
<p>The process is the same as Module 3, but you're doing it multiple times with different image pairs:</p>

<ul>
<li>Pick your best images from Module 1 (different locations)</li>
<li>Pair them with emotional transformations from Module 2</li>
<li>Create video transitions between them</li>
</ul>

<p>For example, you might create:</p>
<ul>
<li>Video 1: You in a boardroom (before: nervous, after: confident)</li>
<li>Video 2: You on a stage (before: anxious, after: triumphant)</li>
<li>Video 3: You with loved ones (before: grateful, after: joyful)</li>
</ul>

<p><strong>Quality Over Quantity**</strong></p>
<p>You don't need dozens of videos. 3-5 strong video clips is enough to tell a compelling story. Focus on quality — images that are well-composed, emotions that feel genuine, transitions that flow.</p>

<p><strong>Organizing Your Assets**</strong></p>
<p>As you generate videos, save them. Create a folder on your computer called "2026 Moment" where you're collecting:</p>
<ul>
<li>Generated images</li>
<li>Video files from i2v</li>
<li>Notes about which clips belong in which sequence</li>
</ul>

<p>You'll need these organized for the timeline editing phase.</p>

<p><a href="#" class="video-link" data-module="4" data-time="107">▶ Watch Image to Video (1:47)</a></p>`
        },
        {
          id: "m4-extending-clips",
          title: "Extending Video Clips for Storytelling",
          timeStart: 215,
          content: `<p>Sometimes you'll have a perfect video clip, but it's not quite long enough for your story. OpenArt lets you <strong>extend video clips</strong> to give you more time for each sequence.</p>

<p><strong>Why Extend?**</strong></p>
<p>Pacing matters in video storytelling. If you want viewers to absorb a moment, to feel what you're feeling, you might need 15-20 seconds per clip, not just 9-10.</p>

<p><strong>How It Works**</strong></p>
<p>In OpenArt's Video menu, look for an option to extend or continue a video clip. You can take an existing video and add more frames to it, stretching the duration while maintaining visual coherence.</p>

<p><strong>Creative Uses**</strong></p>
<p>This is useful when:</p>
<ul>
<li>You want a clip to breathe (let the viewer absorb the emotion)</li>
<li>You need time for music to play over the footage</li>
<li>You want slow-motion effects (extending time makes movement feel slower)</li>
<li>You're building rhythm and pacing in your overall video</li>
</ul>

<p><strong>Practical Tip**</strong></p>
<p>Don't extend too much. Each extension adds processing time. Aim for 15-20 second clips as a sweet spot for a beginner project.</p>

<p><a href="#" class="video-link" data-module="4" data-time="215">▶ Watch Extending Clips (3:30)</a></p>`
        },
        {
          id: "m4-timeline-editor",
          title: "Introduction to the Timeline Editor",
          timeStart: 275,
          content: `<p>Once you have multiple video clips, you need a way to arrange them, sequence them, and refine their timing. That's what the <strong>timeline editor</strong> is for.</p>

<p><strong>What Is the Timeline Editor?**</strong></p>
<p>Think of it like this: a timeline is a visual representation of your video, frame-by-frame, moment-by-moment. You can see every clip, know exactly how long it lasts, and adjust things precisely.</p>

<p><strong>How to Open It**</strong></p>
<p>In OpenArt, navigate to Video tools. You'll see an option for "Timeline Editor" or similar. Click it. You'll land in a workspace that looks like a traditional video editing interface.</p>

<p><strong>The Basic Layout**</strong></p>

<ul>
<li><strong>Timeline Track:</strong> The long horizontal area where your video clips sit end-to-end</li>
<li><strong>Preview Window:</strong> Shows you what the video looks like at the current moment</li>
<li><strong>Playback Controls:</strong> Play, pause, scrub through the video</li>
<li><strong>Properties Panel:</strong> Adjust properties of selected clips (opacity, color, speed, etc.)</li>
</ul>

<p><strong>Your First Task: Drag and Drop**</strong></p>
<p>Import your video clips into the timeline. Drag them into order. This is the skeleton of your story — the sequence of moments that form your narrative.</p>

<p><strong>The Power of the Timeline**</strong></p>
<p>The timeline is where your raw material becomes a coherent story. You're not just collecting clips; you're orchestrating them. You're controlling pacing, timing, and emotional flow.</p>

<p><a href="#" class="video-link" data-module="4" data-time="275">▶ Watch Timeline Editor (4:35)</a></p>`
        },
        {
          id: "m4-text-to-video",
          title: "Using Text to Video for Narrative Scenes",
          timeStart: 330,
          content: `<p>So far, you've created videos from images. But OpenArt also lets you <strong>generate video directly from text prompts</strong> — without needing starting images.</p>

<p><strong>When to Use Text to Video**</strong></p>
<p>Text-to-video is useful when:</p>

<ul>
<li>You want to establish a scene without a generated image first</li>
<li>You're creating a broader landscape or environment shot</li>
<li>You want to generate motion and visual elements without reference images</li>
<li>You're building narrative context (showing where your character is)</li>
</ul>

<p><strong>Example**</strong></p>
<p>Instead of creating an image of yourself and then converting it to video, you could text-to-video: <em>"A stunning sunset over a coastal city, camera slowly pans to reveal a figure standing on a cliff overlooking the ocean."</em></p>

<p>You get a complete video scene without intermediate steps.</p>

<p><strong>How to Use It**</strong></p>
<p>Navigate to Video > Text to Video. Write your prompt (using WHO/WHERE/WHAT). Select your model and duration. Generate. Within a minute or two, you have a video clip.</p>

<p><strong>Integration With Your Story**</strong></p>
<p>Text-to-video is perfect for opening scenes, transition shots, or establishing shots that set the context for your 2026 Moment.</p>

<p><strong>Tip:**</strong> Write your text-to-video prompts with cinematic language. Think like a director describing a scene to a cinematographer.</p>

<p><a href="#" class="video-link" data-module="4" data-time="330">▶ Watch Text to Video (5:30)</a></p>`
        },
        {
          id: "m4-creating-story-images",
          title: "Creating Images to Tell Your Story",
          timeStart: 370,
          content: `<p>Before you edit everything together, step back and think about your story as a whole. What images do you need to tell it effectively?</p>

<p><strong>Story Structure Basics**</strong></p>
<p>Every compelling story has a shape:</p>

<ul>
<li><strong>Beginning:</strong> Where are we? Who is this person? What's the status quo?</li>
<li><strong>Middle:</strong> What's changing? What's being pursued? What's the challenge?</li>
<li><strong>End:</strong> What's been achieved? What does the future look like? How has the character transformed?</li>
</ul>

<p><strong>Translating This to Images and Videos**</strong></p>
<p>For your 2026 Moment, you need images/videos that cover these beats:</p>

<ul>
<li><strong>Opening Scene:</strong> You in the present moment, perhaps thinking about your goal</li>
<li><strong>Journey Scenes:</strong> You taking action, growing, moving toward your vision</li>
<li><strong>Climax Scenes:</strong> You achieving or embodying your 2026 goal</li>
<li><strong>Resolution Scenes:</strong> You in your achieved 2026 moment, transformed and fulfilled</li>
</ul>

<p><strong>Practical Example**</strong></p>
<p>Let's say your 2026 vision is: "I'm a confident public speaker."</p>

<ul>
<li><strong>Opening:</strong> You in a mirror (nervous but determined)</li>
<li><strong>Journey:</strong> You in a practice room (focused, practicing)</li>
<li><strong>Climax:</strong> You stepping onto a stage (nervous energy)</li>
<li><strong>Resolution:</strong> You on stage (confident, powerful, speaking to an audience)</li>
</ul>

<p><strong>Generating Your Story Images**</strong></p>
<p>Go back to the image creation tools. Generate the images you're missing. Use what you learned in Modules 1 and 2 — prompts, reference images, emotion words. Each image should move the story forward.</p>

<p><strong>Quality Check**</strong></p>
<p>Before you move to video, make sure your images feel coherent. The person should look like you. The locations should feel intentional. The emotions should feel genuine.</p>

<p><a href="#" class="video-link" data-module="4" data-time="370">▶ Watch Creating Story Images (6:10)</a></p>`
        },
        {
          id: "m4-start-end-motion",
          title: "Using Start & End Frames for Motion Sequences",
          timeStart: 614,
          content: `<p>Now you have the images for your story. Let's convert them to videos using start/end frames, which you learned in Module 3.</p>

<p><strong>The Workflow**</strong></p>

<p><strong>Step 1: Identify Your Emotional Transformations**</strong></p>
<p>Which images represent emotional shifts? Which moments need to be brought to life with motion?</p>

<p>For example:</p>
<ul>
<li>You nervous in a green room (start frame) → You confident on stage (end frame)</li>
<li>You uncertain about your goal (start) → You fully embodying it (end)</li>
</ul>

<p><strong>Step 2: Create Videos for Key Transitions**</strong></p>
<p>Use image-to-video with these emotional pairs as start and end frames. This is where your emotional arcs become animated.</p>

<p><strong>Step 3: Create Videos for Standalone Images**</strong></p>
<p>For images that don't have a clear "before and after," you can create a video using the same image as both start and end frame, with a support prompt describing subtle motion:</p>

<p><em>"The man stands confidently, slight camera movement, ambient light shifts gently"</em></p>

<p>This creates subtle motion without a radical transformation.</p>

<p><strong>The Power of Motion**</strong></p>
<p>By converting your key images to videos, you're doing something powerful: you're showing the <em>journey</em> within each moment. Not just "you at a location" but "you transforming at that location."</p>

<p><strong>Building Your Video Library**</strong></p>
<p>By the end of this section, you should have:</p>
<ul>
<li>3-5 major video clips (with emotional transformations)</li>
<li>Optional: 2-3 establishing shots or transition videos</li>
<li>Optional: Text-to-video opening or closing scenes</li>
</ul>

<p><a href="#" class="video-link" data-module="4" data-time="614">▶ Watch Start & End Frames (10:14)</a></p>`
        },
        {
          id: "m4-post-production",
          title: "Post-Production: Arranging in the Timeline",
          timeStart: 850,
          content: `<p>Now you have all your video clips. It's time to assemble them into a complete narrative using the timeline editor.</p>

<p><strong>Step 1: Import All Your Clips**</strong></p>
<p>Open the timeline editor. Drag all your video files into the project. You'll see them appear as clips in the timeline.</p>

<p><strong>Step 2: Arrange by Story Structure**</strong></p>
<p>Order them: opening → journey → climax → resolution. This is your rough cut.</p>

<p><strong>Step 3: Trim and Adjust**</strong></p>
<p>Not every clip needs to play in full. Use the timeline to trim clips to their perfect length:</p>

<ul>
<li>Is a clip too long? Trim the end.</li>
<li>Does a clip need to start later? Adjust the in-point.</li>
<li>Is there dead space? Remove it.</li>
</ul>

<p><strong>Step 4: Add Transitions (Optional)**</strong></p>
<p>Between clips, you can add transitions (fades, dissolves, etc.). These should be subtle — you want to emphasize the content, not the effects.</p>

<p><strong>Step 5: Adjust Pacing**</strong></p>
<p>Watch your rough cut from beginning to end. Does it feel too fast? Too slow? Do scenes breathe or do they feel rushed?</p>

<p>You can adjust clip duration (extend or trim) to control pacing. Slower pacing = more emotional impact. Faster pacing = more energy and excitement.</p>

<p><strong>Step 6: Color and Audio Adjustments**</strong></p>
<p>In the timeline editor, you can make fine adjustments:</p>
<ul>
<li><strong>Color Grading:</strong> Adjust the overall color tone of clips to create visual consistency</li>
<li><strong>Opacity:</strong> Fade clips in and out</li>
<li><strong>Audio Levels:</strong> Control volume (we'll add music next)</li>
</ul>

<p><a href="#" class="video-link" data-module="4" data-time="850">▶ Watch Post-Production (14:10)</a></p>`
        },
        {
          id: "m4-music-export",
          title: "Adding Music & Exporting Your Final Video",
          timeStart: 917,
          content: `<p>You're almost there. Now let's add the final piece: <strong>music</strong>. And then we export your complete 2026 Moment Video.</p>

<p><strong>Choosing Your Music**</strong></p>
<p>Music sets the emotional tone of your entire video. It should:</p>

<ul>
<li><strong>Match the emotional arc:</strong> If your video goes from uncertain to triumphant, your music should follow that journey</li>
<li><strong>Support the pace:</strong> Faster music for energetic content, slower for reflective moments</li>
<li><strong>Feel authentic:</strong> Choose music you genuinely love and that represents your vision</li>
</ul>

<p><strong>Where to Find Music**</strong></p>
<p>OpenArt has built-in audio tools. You can:</p>
<ul>
<li>Browse royalty-free music libraries within the platform</li>
<li>Generate music using OpenArt's audio generation tools</li>
<li>Upload your own music if you have it</li>
</ul>

<p><strong>Adding Music to Your Timeline**</strong></p>
<p>In the timeline editor, look for an audio track or music layer. You can drag your music file into this layer. The music will play underneath your video.</p>

<p><strong>Audio Mixing**</strong></p>
<p>If your video clips have ambient sound, you'll want to balance:</p>
<ul>
<li><strong>Video audio:</strong> Any sound captured in the video clips</li>
<li><strong>Music:</strong> Your background track</li>
</ul>

<p>Adjust the volume levels so the music supports without overpowering. Generally, music should sit underneath the emotional content of the visuals.</p>

<p><strong>Optional: Voice-Over or Narration**</strong></p>
<p>If you want to add your own voice telling the story of your 2026 Moment, you can do that too. Record a quick narration and add it as another audio layer. This is optional but can add depth.</p>

<p><strong>Step-by-Step Export**</strong></p>

<ol>
<li>Make sure your timeline is complete and playing correctly</li>
<li>Look for an <strong>Export</strong> or <strong>Download</strong> button</li>
<li>Choose your output settings:
<ul>
<li><strong>Resolution:</strong> 1080p (1920x1080) is standard for online sharing</li>
<li><strong>Format:</strong> MP4 is most universal</li>
<li><strong>Frame Rate:</strong> 24fps or 30fps (depends on your source material)</li>
</ul>
</li>
<li>Click Export</li>
<li>Wait for processing (this might take 5-15 minutes depending on your video length and quality)</li>
<li>Download your final video</li>
</ol>

<p><strong>You've Done It**</strong></p>
<p>You now have your complete 2026 Moment Video. It's a professional-quality narrative that tells the story of your vision. Something that would have cost thousands to produce a few years ago. And you created it.</p>

<p><a href="#" class="video-link" data-module="4" data-time="917">▶ Watch Music & Export (15:17)</a></p>`
        },
        {
          id: "m4-sharing-rewards",
          title: "Sharing Your 2026 Moment & Claiming Your Reward",
          timeStart: 1054,
          content: `<p>Your video is done. Now comes the celebration: <strong>sharing it with the world</strong>.</p>

<p><strong>Share on Social Media**</strong></p>
<p>Your 2026 Moment Video is meant to be seen. Share it on:</p>

<ul>
<li><strong>Instagram:</strong> Great for short-form video (reels)</li>
<li><strong>TikTok:</strong> Perfect for trend-driven, inspiring content</li>
<li><strong>LinkedIn:</strong> If your 2026 vision is professional-related</li>
<li><strong>YouTube:</strong> For longer-form content with more context</li>
<li><strong>Twitter/X:</strong> Quick share with your community</li>
<li><strong>Email:</strong> Send it to friends and family who supported you</li>
</ul>

<p><strong>Tag OpenArt**</strong></p>
<p>When you share, tag <strong>@openart_ai</strong> on social media. The OpenArt community loves seeing what creators build, and you might get featured.</p>

<p><strong>Celebrate the Achievement**</strong></p>
<p>Take a moment to recognize what you've accomplished. You went from zero AI experience to creating a professional video. You visualized your future and brought it to life. That's powerful.</p>

<p><strong>Claim Your 500 Credit Reward**</strong></p>
<p>OpenArt is rewarding you for completing the course. Here's how to claim your reward:</p>

<ol>
<li>Visit <strong>forms.openart.ai/2026moment</strong></li>
<li>Fill out the form with your details</li>
<li>Submit proof of completion (screenshot of your video, share link, etc.)</li>
<li>Receive <strong>500 OpenArt credits</strong> to use on future generations</li>
</ol>

<p>These credits give you free generations, unlocking more creative possibilities.</p>

<p><strong>What's Next?**</strong></p>
<p>This course is complete, but your creative journey isn't. You now have skills to:</p>
<ul>
<li>Create custom images with AI</li>
<li>Tell emotional stories with visual transformation</li>
<li>Animate static images into dynamic videos</li>
<li>Edit and compose multi-clip narratives</li>
</ul>

<p>Keep creating. Keep pushing boundaries. Keep sharing your vision.</p>

<p><strong>Thank you for taking this course. Your 2026 Moment is just the beginning.</strong></p>

<p><a href="#" class="video-link" data-module="4" data-time="1054">▶ Watch Course Conclusion (17:34)</a></p>`
        }
      ]
    }
  ]
};
