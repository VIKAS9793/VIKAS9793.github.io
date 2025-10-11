import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@utils';

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || prefersReducedMotion()) return;

    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    // Vertex shader
    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `;

    // Fragment shader with gradient wave effect
    const fsSource = `
      precision mediump float;
      uniform float uTime;
      uniform vec2 uResolution;
      
      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution;
        
        // Animated gradient waves
        float wave1 = sin(uv.x * 10.0 + uTime * 0.5) * 0.5 + 0.5;
        float wave2 = cos(uv.y * 8.0 - uTime * 0.3) * 0.5 + 0.5;
        
        // Color mixing
        vec3 color1 = vec3(0.0, 1.0, 0.533); // #00ff88
        vec3 color2 = vec3(0.039, 0.518, 1.0); // #0a84ff
        vec3 color3 = vec3(1.0, 0.0, 0.5); // #ff0080
        
        vec3 finalColor = mix(color1, color2, wave1);
        finalColor = mix(finalColor, color3, wave2 * 0.3);
        
        // Fade to black at edges
        float vignette = 1.0 - length(uv - 0.5) * 0.8;
        finalColor *= vignette;
        
        gl_FragColor = vec4(finalColor * 0.15, 0.3);
      }
    `;

    // Compile shader
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertexShader = compileShader(vsSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fsSource, gl.FRAGMENT_SHADER);
    
    if (!vertexShader || !fragmentShader) return;

    // Create program
    const program = gl.createProgram();
    if (!program) return;
    
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Set up geometry
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'aVertexPosition');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniforms
    const timeLocation = gl.getUniformLocation(program, 'uTime');
    const resolutionLocation = gl.getUniformLocation(program, 'uResolution');

    // Animation loop
    let startTime = Date.now();
    const animate = () => {
      const time = (Date.now() - startTime) * 0.001;
      
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  if (prefersReducedMotion()) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" style={{ zIndex: -2 }} />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0"
      style={{ zIndex: -2, opacity: 0.4 }}
    />
  );
}
