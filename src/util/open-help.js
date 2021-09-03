import {html, render} from "../../web_modules/lit-html.js";
import {APP_VERSION} from "./../config.js";
import "../atoms/button.js";

/**
 * Opens the dialog dialog.
 * @returns {Promise<void>}
 */
export async function openHelp () {
	const {openDialog} = await import("../../web_modules/web-dialog.js");
	const {$dialog, resolver} = openDialog({
		$content: $dialog => render(html`
		<style>
		* {
			box-sizing: border-box;
		}
		
		h2 {
			margin: var(--spacing-xl) 0 var(--spacing-m);
		}
		
		h3 {
			margin: var(--spacing-m) 0 var(--spacing-s);
		}
		
		p {
			margin: 0 0 var(--spacing-m);
		}
		
		a {
			color: var(--link);
		}
		
		#close {
			position: absolute;
			top: 0;
			right: 0;
			padding: var(--spacing-l);
			cursor: pointer;
			font-size: 1.5rem;
		}
		
		#version {
			position: absolute;
			right: var(--spacing-m);
			bottom: var(--spacing-m);
			color: var(--shade-500);
		}
		
	</style>
	
	<div tabindex="0"></div>
	<ws-button id="close" @click="${() => $dialog.close()}" aria-label="Close dialog">✖️</ws-button>
	
	<h2>학과 소개</h2>
	<h3> 교통대학교 컴퓨터공학과</h3>
				<p>이러한 시대적 상황 속에서 4차 산업혁명 시대의 핵심 역량을 갖춘 인재 양성을 위해 우리 컴퓨터공학전공은 최신 교육 시스템 및 실습 시설을 갖추고, 200여 명의 학부 학생과 석사 및 박사과정의 대학원생들에게 높은 수준의 교육 및 연구 환경을 제공하고 있습니다. 특히, 우리 학생들이 ICT 분야에서 발생할 수 있는 다양하고 복합적인 문제를 효과적으로 분석하고, 효율적인 문제해결 방법을 찾아 구현할 수 있도록 우리 학과는 컴퓨터 소프트웨어와 하드웨어를 아우르는 교육과정을 운영하고 있습니다.</p>
				<p></p>
				<p>홈페이지 : <a target="_blank" href="https://www.ut.ac.kr/ceit/sub02_01_01.do" rel="noopener" aria-label="Open get involved">교통대학교 컴퓨터공학과</a></p>
				<p></p>
				
			<span id="version">v${APP_VERSION}</span>
		`, $dialog)
	});

	// Flip the colors
	$dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
	$dialog.style.setProperty(`--dialog-color`, `var(--background)`);

	return resolver;
}