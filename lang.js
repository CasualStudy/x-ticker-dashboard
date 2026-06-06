const dict = {
    // index.html
    "CasualStudy 随意研究": "CasualStudy",
    "Serenity@aleabitoreddit Ticker 提及分析": "Serenity@aleabitoreddit Ticker Mention Analysis",
    "基于推文数据 (2025年7月 - 2026年6月初) 的 Ticker 提及频率与全景分布统计，探索核心关注赛道。": "Based on tweet data (July 2025 - June 2026), analyzing ticker mention frequencies and panoramic distribution to explore core focus sectors.",
    "提及总数": "Total Mentions",
    "AI/半导体/算力/电力相关": "AI / Semi / Compute / Power",
    "其他/未分类领域": "Other / Uncategorized",
    "核心赛道分布比例": "Core Sectors Distribution",
    "美股与非美股比例": "US vs Non-US Ratio",
    "交易所详细分布": "Exchange Distribution Details",
    "非美股与美股提及数量占比": "Non-US vs US Tickers Ratio",
    "非美股与美股提及次数占比": "Non-US vs US Mentions Ratio",
    "总结大本营": "Summaries Hub",
    "查看博主对每个Ticker的核心逻辑总结": "View core investment thesis summaries for each ticker",
    "表现追踪": "Performance Tracking",
    "追踪所有被提及标的的市场表现及频率": "Track market performance and frequency of all mentioned tickers",
    "查看所有总结信息 &rarr;": "View All Summaries &rarr;",
    "查看标的表现追踪 &rarr;": "View Performance Tracking &rarr;",
    "© 2026 CasualStudy 随意研究. All rights reserved.": "© 2026 CasualStudy. All rights reserved.",

    // index.html table headers
    "上市地区": "Region",
    "简称": "Symbol",
    "英文全称": "Full Name (EN)",
    "中文全称": "Full Name (CN)",
    "标的数量": "Ticker Count",

    // index.html navigation cards (使用实际箭头符号)
    "Ticker 详细总结情报": "Ticker Detailed Summaries",
    "分梯队浏览每个被提及 Ticker 的深度分析总结，快速洞察博主的核心观点。": "Browse in-depth analysis summaries of mentioned tickers by frequency tier.",
    "查看总结大本营 →": "View Summaries Hub →",
    "查看总结大本营 &rarr;": "View Summaries Hub &rarr;",
    "详细表现追踪": "Detailed Performance Tracking",
    "查看 Serenity 提到的每个 Ticker 从首次提及至今的股价表现、胜率及平均涨跌幅。": "View stock performance, win rate, and average returns since first mention.",
    "查看标的表现追踪 →": "View Performance Tracking →",
    "查看标的表现追踪 &rarr;": "View Performance Tracking &rarr;",

    // summaries.html
    "所有被提及 Ticker 的深度分析总结。通过提及频次进行筛选，洞察博主最关注的核心资产。": "In-depth analysis and summaries of all mentioned tickers. Filter by mention frequency to discover core assets.",
    "&larr; 返回概览大屏": "&larr; Back to Dashboard",
    "极高频 (>100次)": "Ultra High (>100)",
    "高频 (20-100次)": "High (20-100)",
    "中频 (5-20次)": "Medium (5-20)",
    "低频 (<5次)": "Low (<5)",
    "全部": "All",
    "次提及": " Mentions",
    "提及时间跨度": "Mention Timespan",
    "暂无中文总结": "No summary available",

    // performance.html
    "Ticker 详细表现追踪": "Ticker Performance Tracking",
    "博主提及标的表现追踪": "Mentioned Tickers Performance Tracking",
    "从首次提及至今的股价追踪与回报率测算。请注意：此数据仅供分析，不构成投资建议。": "Stock price tracking and return calculation since first mention. Note: This data is for analysis only, not investment advice.",
    "首次提及时市值分布": "Market Cap Distribution at First Mention",
    "首次提到时间": "First Mention Date",
    "当时股价": "Initial Price",
    "当时市值": "Initial Market Cap",
    "当前股价": "Current Price",
    "当前市值": "Current Market Cap",
    "涨跌幅": "Change",
    "整体提及胜率": "Overall Win Rate",
    "平均涨跌幅": "Average Change",
    "所有被提及标的的市值及表现追踪 (按首字母排序)": "Market cap and performance tracking of all mentioned tickers",
    "提及次数": "Mention Count",
    "公司名称": "Company Name",
    "板块分类": "Sector",
    " 支 (": " tickers (",
    "标的 (Ticker)": "Ticker",

    // Dynamic partials
    "次": "Mentions",
    "未知": "Unknown",
    "美股": "US",
    "非美股": "Non-US",
    "美股上市 (US)": "US Listed (US)",
    "非美股上市 (Non-US)": "Non-US Listed (Non-US)",
    "未上市/未知": "Unlisted / Unknown",
    "超大盘 (>$200B)": "Mega (>$200B)",
    "大盘 ($10B-$200B)": "Large ($10B-$200B)",
    "中盘 ($2B-$10B)": "Mid ($2B-$10B)",
    "小盘 ($300M-$2B)": "Small ($300M-$2B)",
    "微盘 (<$300M)": "Micro (<$300M)"
};

class Translator {
    constructor() {
        try {
            this.lang = localStorage.getItem('lang') || 'zh';
        } catch (e) {
            this.lang = 'zh';
        }
        this.initSwitch();
        if (this.lang === 'en') {
            this.translatePage();
        }
    }

    initSwitch() {
        const btn = document.createElement('button');
        btn.innerHTML = this.lang === 'en' ? '中' : 'EN';
        btn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: #fff;
            padding: 8px 16px;
            border-radius: 99px;
            cursor: pointer;
            backdrop-filter: blur(10px);
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            transition: all 0.3s;
        `;
        btn.onmouseover = () => btn.style.background = 'rgba(255,255,255,0.2)';
        btn.onmouseout = () => btn.style.background = 'rgba(255,255,255,0.1)';
        btn.onclick = () => {
            this.lang = this.lang === 'zh' ? 'en' : 'zh';
            try {
                localStorage.setItem('lang', this.lang);
            } catch (e) {
                console.warn('localStorage not available', e);
            }
            location.reload();
        };
        document.body.appendChild(btn);
    }

    translatePage() {
        // Walk DOM and replace exact text nodes
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while (node = walker.nextNode()) {
            let text = node.nodeValue.trim();
            if (dict[text]) {
                node.nodeValue = node.nodeValue.replace(text, dict[text]);
            }
        }

        // Replace innerHTML for elements that might contain HTML entities like &rarr;
        const elements = document.querySelectorAll('*');
        elements.forEach(el => {
            if (el.children.length === 0) { // only leaves to avoid destroying structure
                let html = el.innerHTML.trim();
                if (dict[html]) {
                    el.innerHTML = dict[html];
                }
            }
        });

        // 处理返回按钮
        const navBack = document.getElementById('nav-back');
        if (navBack) {
            navBack.innerHTML = dict['&larr; 返回概览大屏'] || navBack.innerHTML;
        }

        // 处理筛选按钮文字
        document.querySelectorAll('.btn-text').forEach(el => {
            const text = el.textContent;
            if (dict[text]) {
                el.textContent = dict[text];
            }
        });
    }
}

window.t = function(text) {
    try {
        if (localStorage.getItem('lang') === 'en' && dict[text]) {
            return dict[text];
        }
    } catch (e) {}
    return text;
};

document.addEventListener('DOMContentLoaded', () => {
    window.appTranslator = new Translator();
});
