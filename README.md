<div align="center">
  <h3 align="center">wAIfu</h3>
  <p align="center">An AI anime companion</p>
</div>

[Demo](https://github.com/unteifu/wAIfu/assets/58165539/720f5a07-29cd-4699-bdc2-2acc747e890c)


### Built With
* [Next.js](https://nextjs.org/)
* [Vercel AI](https://vercel.com/ai)
* [ElevenLabs](https://eleven-labs.com/)
* [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display/)

### Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
* node
* pnpm >= 9.2.0
  ```sh
  npm install -g pnpm
  ```
* ChatGPT API key
* ElevenLabs API key

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/unteifu/wAIfu.git
    ```
    or if you have the GitHub CLI installed

    ```sh
   gh repo clone unteifu/wAIfu
    ```
2. Install NPM packages
    ```sh
    pnpm install
    ```
3. Copy the `.env.example` and rename to `.env` in the root directory and update the following values
    ```env
    OPENAI_API_KEY="your_chatgpt_api_key"
    ELEVENLABS_API_KEY="your_elevenlabs_api_key"
    VOICE_ID="your_voice_id"
    ```
4. Run the development server
    ```sh
    pnpm run dev
    ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result
